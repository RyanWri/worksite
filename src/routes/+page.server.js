export async function load({ fetch }) {
  // Call your API endpoint to fetch data
  const response = await fetch('/api/services');
  if (!response.ok) {
    console.error('Failed to fetch services:', response.status);
    return { services: [] }; // Return an empty array if fetch fails
  }
  if (response.ok) {
    const services = await response.json() 
    return { services };
  }
  else {
    return {
      services: []
    };
  }
}
