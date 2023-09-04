<script lang="ts">
  import type { PageData } from "./$types";
  import Counter from "$lib/components/Counter.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  export let data: PageData;
</script>

<h1 class="text-2xl mb-4">Projects</h1>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  {#each data.posts as { slug, title, imagePath }}
    <div class="mb-4">
      <ProjectCard {slug} {title} {imagePath} />
    </div>
  {/each}
</div>
