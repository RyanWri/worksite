<script>
  import { profile_details } from "$lib/data/profile_details";
  import { onMount } from "svelte";
  import ProfileGrid from "$lib/components/ProfileGrid.svelte";
  import HomePageButtonsNav from "../lib/components/HomePageButtonsNav.svelte";
  let animate = false;

  // Start the animation when the component mounts
  onMount(() => {
    animate = true;
  });
</script>

<div class="container mx-auto py-4">
  <h1 class="text-2xl font-bold mb-3">About Me</h1>
  <div class="shadow rounded-lg p-3">
    <div class="flex items-center justify-center mb-4">
      <img
        src="/images/me.webp"
        alt="Ryan Wright"
        class="w-32 h-32 rounded-full"
      />
    </div>
    <ProfileGrid {profile_details} />
    <div class="mb-4 md:ml-8">
      <h2 class="text-xl font-semibold">Bio</h2>
      <p class="mt-1 text-lg md:text-xl">
        {#each profile_details.bio as bullet}
          <span class:animate class="animated-paragraph">{bullet} <br /> </span>
        {/each}
      </p>
    </div>
  </div>
  <HomePageButtonsNav />
</div>
