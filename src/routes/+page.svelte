<script>
  import Card from "$lib/components/Card.svelte";
  export let data;
  export let cards = data.cards;
  export let aboutMeText = data.aboutMeText;
</script>

<svelte:head>
  <title>The Wright Way - Tech Solutions</title>
  <meta
    name="description"
    content="Explore our range of services in cloud infrastructure, AI solutions, and more."
  />
  <meta name="keywords" content="cloud, AI, consulting, services, devops" />
</svelte:head>

<div class="container mx-auto p-4">
  <!-- About Me Section -->
  <div class="text-xl mb-8 mt-4">
    <span class="text-xl">{aboutMeText}</span>
  </div>

  {#if cards}
    <!-- Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each cards as card}
        <Card
          image={card.image}
          title={card.title}
          description={card.description}
        />
      {/each}
    </div>
  {/if}
</div>
