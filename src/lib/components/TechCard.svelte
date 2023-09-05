<script lang="ts">
  import Icon from "@iconify/svelte";
  export let technologies: string[];
  export let category: string;
  export let type_icon: string;
</script>

<h2 class="text-2xl text-black mb-4 capitalize">{category}</h2>
<div class="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 gap-1 pb-4 mb-2">
  {#each technologies as technology}
    <Icon icon="{type_icon}:{technology}" height="48" width="48" />
  {/each}
</div>
