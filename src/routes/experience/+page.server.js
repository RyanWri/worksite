/** @type {import('./$types').PageLoad} */

export const load = async ({ params }) => {
  const data = await (await import("$lib/data/workExperience.json")).default;

  if (!data) {
    throw error(404, "work experience not found!");
  }

  return {
    workExperiencenTimeline: data,
  };
};
