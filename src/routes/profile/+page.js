/** @type {import('./$types').PageLoad} */
// Import the fetch function
const jsonFilePath = "src/lib/data/profile_details.json";

// Define the load function
export async function load({ fetch }) {
  try {
    // Fetch the JSON data from the server-side function
    const response = await fetch(jsonFilePath);
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch the JSON file");
    }
    const data = await response.json();

    // Return the data
    return { profileDetails: data };
  } catch (error) {
    // Handle any errors
    console.error("An error occurred:", error);
    return { error };
  }
}
