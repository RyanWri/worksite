<script>
  import Card from "$lib/components/Card.svelte";
  import { onMount } from "svelte";

  let data = {};
  let cards = [];
  let aboutMeText = "";
  let words = [];
  let currentWordIndex = 0;
  let cardsToShow = 0;

  onMount(async () => {
    // Fetch data for cards
    const response = await fetch("/data/new_home.json");
    if (response.ok) {
      data = await response.json();

      // set variables
      cards = data.cards;
      aboutMeText = data.intro;

      // Show animations
      words = aboutMeText.split(" ");
      const aboutMeInterval = setInterval(() => {
        if (currentWordIndex < words.length) {
          currentWordIndex++;
        } else {
          clearInterval(aboutMeInterval);

          // Start showing the cards one by one after the about me section is done
          const cardsInterval = setInterval(() => {
            if (cardsToShow < cards.length) {
              cardsToShow++;
            } else {
              clearInterval(cardsInterval);
            }
          }, 1000);
        }
      }, 5000 / words.length);
    } else {
      console.error("Failed to fetch data");
    }
  });
</script>

<div class="container mx-auto p-4">
  <!-- About Me Section -->
  <div class="about-me">
    {#each words.slice(0, currentWordIndex) as word}
      <span class="text-2xl">{word} </span>
    {/each}
  </div>

  {#if cards}
    <!-- Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each cards.slice(0, cardsToShow) as card}
        <Card
          image={card.image}
          title={card.title}
          description={card.description}
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .about-me {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
</style>
