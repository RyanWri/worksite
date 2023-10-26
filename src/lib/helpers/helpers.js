import fs from "fs";

export const read_and_parse_json = async (path) => {
  try {
    const jsonData = fs.readFileSync(path, "utf-8");
    const result = JSON.parse(jsonData);
    return result;
  } catch (error) {
    return null;
  }
};

export const readAndParseJson = async (path) => {
  fetch(path)
    .then((response) => response.json())
    .then((data) => {
      // Use the data from the JSON file
      console.log(data);
      return data;
    })
    .catch((error) => {
      // Handle any errors
      console.error("An error occurred:", error);
    });
};
