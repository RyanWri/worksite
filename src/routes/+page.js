/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
  return {
    captions: data.captions,
  };
}
