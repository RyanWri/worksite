import fs from "fs";

export async function load() {
  const jsonData = fs.readFileSync(
    "src/lib/data/home_page_captions.json",
    "utf-8"
  );
  const captions = JSON.parse(jsonData);

  return captions;
}
