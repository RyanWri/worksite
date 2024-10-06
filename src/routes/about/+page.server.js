/** @type {import('./$types').PageLoad} */

export const load = async () => {
    const data = await (await import("$lib/data/about.json")).default;
  
    if (!data) {
      throw error(404, "Data not found!");
    }
  
    return {
      logos: data.logos,
      team: data.team
    };
  };
  