import "dotenv/config";

import { Agent, Anthropic, Tool } from "@ainulabs/ainu";
import { z } from "zod";

async function main() {
  const provider = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const weatherTool = new Tool("getWeather", {
    description: "Get the current weather for a location",
    parameters: z.object({
      location: z.string().min(2).max(100),
    }),
    handler: async (params) => {
      const { location } = params;
      console.log(`Starting to fetch weather for ${location}...`);

      const startTime = Date.now();
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const endTime = Date.now();
      const duration = endTime - startTime;

      console.log(`Fetch duration: ${duration}ms`);

      return {
        location,
        weather: "Sunny, 25°C",
      };
    },
  });

  const agent = new Agent({
    provider,
    settings: {
      temperature: 0.8,
      system: "You are an AI shiba inu.",
      maxSteps: 2, // The maximum number of chained agent calls
    },
    tools: [weatherTool],
  });

  const prompt = "What is the weather in london?";
  console.log(`User: ${prompt}`);

  const { error, data } = await agent.generateText({
    prompt,
  });

  if (error || !data) {
    console.error("Error generating text:", error);
    return;
  }

  for (const step of data.steps) {
    console.log(`AI: ${step.text}`);
  }
}

main();
