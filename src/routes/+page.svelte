<script>
  import { onMount } from "svelte";
  export let data;
  $: captions = data.captions.captions;
  let animate = false;

  // Start the animation when the component mounts
  onMount(() => {
    animate = true;
  });
</script>

{#if captions && captions.length > 0}
  <div class="relative min-h-screen m-0">
    <div
      class="bg-cover bg-no-repeat bg-center absolute inset-0 animated-background"
      style="background-image: url('/images/paul-frenzel-MnHQMzC6n-o-unsplash.jpg');"
    >
      <div
        class="absolute inset-0 flex flex-col md:items-center md:justify-center bg-opacity-75 text-white"
      >
        <h1 class="text-4xl font-bold">I am a versatile developer</h1>
        <p class="text-xl md:text-2xl lg:text-3xl pt-3">
          {#each captions as caption}
            <span class:animate class="animated-paragraph mb-1 leading-7"
              >{caption} <br />
            </span>
          {/each}
        </p>
      </div>
    </div>
  </div>
{/if}
