/** @type {import('./$types').PageLoad} */

export const load = async ({ params }) => {
  const data = await (await import("$lib/data/education.json")).default;

  if (!data) {
    // throw redirect(301, '/products');
    throw error(404, "education timeline not found!");
  }

  return {
    educationTimeline: data,
  };
};
