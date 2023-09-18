<script>
  import About from "$lib/pages/About.svelte";
  import Contact from "$lib/pages/Contact.svelte";
  import Projects from "$lib/pages/Projects.svelte";
  import Technologies from "$lib/pages/Technologies.svelte";
  import Welcome from "./Welcome.svelte";
  export let data;
</script>

<Welcome />
<div id="about">
  <About />
</div>
<div id="contact">
  <Contact />
</div>
<div id="projects">
  <Projects {data} />
</div>
<div id="technologies">
  <Technologies {data} />
</div>
