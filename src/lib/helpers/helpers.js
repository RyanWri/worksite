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
