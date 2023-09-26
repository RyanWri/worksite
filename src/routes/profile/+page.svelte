<script>
  import { data } from "./data";
  import { onMount } from "svelte";

  let animate = false;

  // Start the animation when the component mounts
  onMount(() => {
    animate = true;
  });
</script>

<div class="container mx-auto py-6">
  <h1 class="text-2xl font-bold mb-4">About Me</h1>
  <div class="shadow rounded-lg p-6">
    <div class="flex items-center justify-center mb-4">
      <img
        src="/images/me.webp"
        alt="Ryan Wright"
        class="w-32 h-32 rounded-full"
      />
    </div>
    <div class="mb-4">
      <h2 class="text-xl font-semibold">Name</h2>
      <h3 class="text-lg font-semibold">{data.name}</h3>
    </div>
    <div class="mb-4">
      <h2 class="text-xl font-semibold">Occupation</h2>
      <p class="text-lg font-semibold">{data.occupation}</p>
    </div>
    <div class="mb-4">
      <h2 class="text-xl font-semibold">Bio</h2>
      <p class="text-lg">
        <span class:animate class="animated-paragraph">{data.bio} </span>
      </p>
    </div>
  </div>
</div>
