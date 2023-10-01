<script>
  import { profile_details } from "./data";
  import { onMount } from "svelte";
  import ProfileGrid from "$lib/components/ProfileGrid.svelte";

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
      <p class="text-lg">
        <span class:animate class="animated-paragraph"
          >{profile_details.bio}
        </span>
      </p>
    </div>
  </div>
</div>
