export async function load({ fetch }) {
  // Call your API endpoint to fetch data
  const response = await fetch('/api/services');
  if (!response.ok) {
    // Return an empty array if fetch fails
    return { services: [] }; 
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
