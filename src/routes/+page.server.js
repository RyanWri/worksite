/** @type {import('./$types').PageLoad} */

export const load = async ({ params }) => {
  const data = await (await import("$lib/data/homePageCaptions.json")).default;

  if (!data) {
    throw error(404, "Captions not found!");
  }

  return {
    captions: data,
  };
};
