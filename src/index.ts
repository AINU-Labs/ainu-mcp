import "dotenv/config";

import { createAgent } from "./agent";
import { app } from "./app";

// Wait until the server is up and listening on port 3000 before resolving.
function startServer() {
  return new Promise<void>((resolve, reject) => {
    app.listen(3000, (error) => {
      if (error) {
        console.error("Error starting server:", error);
        return reject(error);
      }
      console.log("Server is running on http://localhost:3000");
      resolve();
    });
  });
}

async function main() {
  // Start your 'remote' server and wait for it to fully load
  await startServer();

  // Create your agent
  const agent = createAgent();

  // List the agents available tools. This will output the 'remote' MCP tools along with any local tools
  const tools = await agent.tools();

  // getLocation, getWeather
  console.log("Available tools:", Object.keys(tools).join(", "));

  const { error, data } = await agent.generateText({
    prompt: "What is the weather like in my location?",
    maxSteps: 3,
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
