import fs from "fs";

export async function load() {
  const jsonData = fs.readFileSync("src/lib/data/skills.json", "utf-8");
  const skills = JSON.parse(jsonData);

  return skills;
}
