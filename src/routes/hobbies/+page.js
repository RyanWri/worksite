/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
  if (!data) return {};
  else return { hobbies: data.hobbies };
}
