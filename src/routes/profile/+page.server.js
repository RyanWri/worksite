/** @type {import('./$types').PageServerLoad} */
import { read_and_parse_json } from "$lib/helpers/helpers";

export async function load() {
  const profileDetails = await read_and_parse_json(
    "src/lib/data/profile_details.json"
  );
  if (!profileDetails) return {};
  return profileDetails;
}
