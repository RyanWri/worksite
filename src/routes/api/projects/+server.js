// src/routes/api/projects/+server.js
import { json } from "@sveltejs/kit";

export async function GET() {
  try {
    const projects = await (await import("$lib/data/projects.json")).default;
    if (!projects || projects.length === 0) {
      throw new Error("JSON data is empty or invalid");
    }
    return json(projects);
  } catch (error) {
    return json({ error: "Failed to load data" }, { status: 500 });
  }
}
