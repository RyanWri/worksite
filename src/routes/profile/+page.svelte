<script>
  import { onMount } from "svelte";
  import ProfileGrid from "$lib/components/ProfileGrid.svelte";
  import HomePageButtonsNav from "$lib/components/HomePageButtonsNav.svelte";

  export let data;
  $: profileDetails = data.profileDetails;

  let animate = false;
  let showProfile = false;

  function toggleProfile() {
    showProfile = !showProfile;
  }

  // Start the animation when the component mounts
  onMount(() => {
    animate = true;
  });
</script>

{#if showProfile}
  <div class="container mx-auto py-4">
    <h1 class="page-title">About Me</h1>
    <div class="shadow rounded-lg p-3">
      <div class="flex items-center justify-center mb-4">
        <img
          src="/images/me.webp"
          alt="Ryan Wright"
          class="w-32 h-32 rounded-full"
        />
      </div>
      {#if profileDetails}
        <ProfileGrid {profileDetails} />
        <div class="mb-4 md:ml-8">
          <h2 class="text-xl font-semibold">Bio</h2>
          <p class="mt-1 text-lg md:text-xl">
            {#each profileDetails.bio as bullet}
              <span class:animate class="animated-paragraph"
                >{bullet} <br />
              </span>
            {/each}
          </p>
        </div>
      {/if}
    </div>
    <HomePageButtonsNav />
  </div>
{:else}
  <div class="flex items-center justify-center h-screen">
    <button
      on:click={toggleProfile}
      class="bg-blue-500 hover:bg-cyan-700 w-1/2 h-1/4 md:w-1/4 md:h-1/5 font-bold py-2 px-4 shadow-sm rounded-full"
    >
      Show Profile
    </button>
  </div>
{/if}
