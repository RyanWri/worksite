<script>
  import About from "$lib/pages/About.svelte";
  import Contact from "$lib/pages/Contact.svelte";
  import Projects from "$lib/pages/Projects.svelte";
  import Technologies from "$lib/pages/Technologies.svelte";
  export let data;
</script>

<div id="about" class="flex h-screen">
  <h2 class="page-title">About</h2>
  <About />
  <div class="my-divider" />
</div>
<div id="projects">
  <h2 class="page-title">Projects</h2>
  <Projects {data} />
</div>
<div id="technologies">
  <h2 class="page-title">Technologies</h2>
  <Technologies {data} />
</div>
<div id="contact">
  <h2 class="page-title">Contact</h2>
  <Contact />
</div>
