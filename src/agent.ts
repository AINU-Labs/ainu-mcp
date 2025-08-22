import { Agent, Anthropic, MCP, Tool } from "@ainulabs/ainu";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

// We use helper function here as we want to ensure the MCP client is created only after
// the server is up and running
export function createAgent() {
  const mcpClient = new MCP({
    name: "Solana MCP Client",
    version: "1.0.0",
    transport: new StreamableHTTPClientTransport(
      new URL("http://localhost:3000/mcp")
    ),
  });

  // Along with the MCP client we will create a local tool as well
  const tool = new Tool("getLocation", {
    description: `Fetches the current location of the user.`,
    handler: async () => {
      const locations = ["New York", "Los Angeles", "Chicago"];
      return locations[Math.floor(Math.random() * locations.length)];
    },
  });

  const provider = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY || "",
  });

  return new Agent({
    settings: {
      system: `For all requests you must call one of your tools.`,
      maxSteps: 2,
      temperature: 0.7,
    },
    provider,
    clients: [mcpClient],
    tools: [tool],
  });
}
