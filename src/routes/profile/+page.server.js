/** @type {import('./$types').PageLoad} */

export const load = async ({ params }) => {
  const data = await (await import("$lib/data/profile_details.json")).default;

  if (!data) {
    // throw redirect(301, '/products');
    throw error(404, "Product not found!");
  }

  return {
    profileDetails: data,
  };
};
