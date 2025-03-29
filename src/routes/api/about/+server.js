// src/routes/api/services/+server.js
import { json } from '@sveltejs/kit';

export async function GET() {
  try {
    const about = await (await import("$lib/data/about.json")).default;
    if (!about || about.length === 0) {
      throw new Error('JSON data is empty or invalid');
    }
    return json(about);
  } catch (error) {
    console.error('Error loading services:', error);
    return json({ error: 'Failed to load data' }, { status: 500 });
  }
}
