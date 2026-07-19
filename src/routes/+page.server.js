export async function load({ fetch }) {
  const [aboutRes, projectsRes] = await Promise.all([
    fetch("/api/about"),
    fetch("/api/projects"),
  ]);

  const about = aboutRes.ok ? await aboutRes.json() : {};
  const clients = projectsRes.ok ? await projectsRes.json() : [];

  return { about, clients };
}
