// Import the fs module
import fs from "fs";

// Define the path to the JSON file
const jsonFilePath = "src/lib/data/profile_details.json";

// Define the server-side function
export async function get() {
  try {
    // Read the JSON file
    const jsonData = fs.readFileSync(jsonFilePath, "utf-8");

    // Parse the JSON data
    const data = JSON.parse(jsonData);

    // Return the data as a JSON response
    return {
      body: JSON.stringify(data),
    };
  } catch (error) {
    // Handle any errors
    console.error("An error occurred:", error);
    return {
      status: 500,
      body: "An error occurred",
    };
  }
}
