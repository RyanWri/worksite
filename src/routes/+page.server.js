/** @type {import('./$types').PageLoad} */
export const load = async () => {
  const servicesData = await (await import("$lib/data/services.json")).default;
  const trainingData = await (await import("$lib/data/training.json")).default;
  const educationData = await (await import("$lib/data/education.json")).default;

  return {
    services: servicesData,
    training: trainingData,
    education: educationData
  };
};
