export async function load({ fetch }) {
  // Call your API endpoint to fetch data
  const response = await fetch('/api/about');
  const about = {}
  if (!response.ok) {
    // Return an empty object if fetch fails
    return { about }; 
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
