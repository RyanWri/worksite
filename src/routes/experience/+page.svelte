<script>
  import { onMount } from "svelte";
  import { data } from "./data";
  import Icon from "@iconify/svelte";
  let timelineData = data.timelineData;

  onMount(() => {
    // Sort the timeline data by date
    timelineData = timelineData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  });
</script>

<div class="container mx-auto">
  <h1 class="text-2xl font-bold mb-4">Work Experience</h1>
  <ol class="relative border-l border-gray-200 mt-3">
    {#each timelineData as item}
      <li class="mb-10 ml-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
        />

        <div class="flex items-center mb-2">
          {#if item.logo.search(".webp") !== -1}
            <img
              src={`/images/${item.logo}`}
              alt={item.event}
              class="rounded-full h-8 w-8"
            />
          {:else}
            <Icon icon={item.logo} class="rounded-full h-8 w-8" />
          {/if}
          <h4 class="flex-1 ml-4 text-lg">{item.company}</h4>
        </div>
        <h3 class="text-lg dark:text-white">
          {item.title}
        </h3>
        <time class="mb-1 leading-none">{item.date}</time>
        <p class="mb-4 text-base font-normal">
          {item.description}
        </p>
      </li>
    {/each}
  </ol>
</div>
