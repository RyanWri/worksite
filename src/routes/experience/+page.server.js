import fs from "fs";

export async function load() {
  const jsonData = fs.readFileSync(
    "src/lib/data/work_experience.json",
    "utf-8"
  );
  const workExperiencenTimeline = JSON.parse(jsonData);

  return workExperiencenTimeline;
}
