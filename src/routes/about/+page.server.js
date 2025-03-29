export async function load({ fetch }) {
  // Call your API endpoint to fetch data
  const response = await fetch('/api/about');
  const about = {}
  if (!response.ok) {
    console.error('Failed to fetch services:', response.status);
    return { about }; // Return an empty array if fetch fails
  }
  if (response.ok) {
    const about = await response.json() 
    return { about };
  }
  else {
    return {
      about
    };
  }
}
