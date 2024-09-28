/** @type {import('./$types').PageLoad} */

export const load = async () => {
  // Fetch data from the JSON file
  const data = await (await import("$lib/data/home-page-data.json")).default;

  if (!data) {
    throw error(404, "Data not found!");
  }

  return {
    cards: data.cards,
    aboutMeText: data.intro,
  };
};
