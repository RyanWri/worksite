/** @type {import('./$types').PageServerLoad} */
import { read_and_parse_json } from "$lib/helpers/helpers";

export async function load() {
  const hobbies = await read_and_parse_json("src/lib/data/hobbies.json");
  if (!hobbies) return {};
  return hobbies;
}
