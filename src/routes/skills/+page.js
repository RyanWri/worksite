/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
  return { skills: data.skills.skills };
}
