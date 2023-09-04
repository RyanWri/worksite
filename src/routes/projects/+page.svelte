<script lang="ts">
  import type { PageData } from "./$types";
  import Counter from "$lib/components/Counter.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  export let data: PageData;
</script>

<div class="container">
  <h1 class="text-2xl mb-4">Projects</h1>
  {#each data.posts as { slug, title }}
    <div class="row-auto mb-4">
      <ProjectCard {slug} {title} />
    </div>
  {/each}
</div>
