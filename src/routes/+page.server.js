import about from "$lib/data/about.json";
import clients from "$lib/data/projects.json";

export function load() {
  return { about, clients };
}
