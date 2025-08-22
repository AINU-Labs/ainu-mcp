import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function createWeatherServer() {
  const server = new McpServer({
    name: "weather-server",
    version: "1.0.0",
  });

  server.registerTool(
    "getWeather",
    {
      title: "Get Weather",
      description: "Fetches the current weather for a given location",
      inputSchema: { location: z.string() },
    },
    async ({ location }) => ({
      content: [
        { type: "text", text: `The current weather in ${location} is sunny.` },
      ],
    })
  );

  return server;
}
