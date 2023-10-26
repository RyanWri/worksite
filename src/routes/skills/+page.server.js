/** @type {import('./$types').PageServerLoad} */
import { read_and_parse_json } from "$lib/helpers/helpers";

export async function load() {
  const skills = await read_and_parse_json("src/lib/data/skills.json");
  if (!skills) return {};
  else return skills;
}
