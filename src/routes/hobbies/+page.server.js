/** @type {import('./$types').PageLoad} */

export const load = async ({ params }) => {
  const data = await (await import("$lib/data/hobbies.json")).default;

  if (!data) {
    throw error(404, "Hobbies not found!");
  }

  return {
    hobbies: data,
  };
};
