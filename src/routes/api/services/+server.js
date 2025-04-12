// src/routes/api/services/+server.js
import { json } from '@sveltejs/kit';

export async function GET() {
  try {
    const services = await (await import("$lib/data/services.json")).default;
    if (!services || services.length === 0) {
      throw new Error('JSON data is empty or invalid');
    }
    return json(services);
  } catch (error) {
    // Return a proper error response without logging to console
    return json({ error: 'Failed to load data' }, { status: 500 });
  }
}
