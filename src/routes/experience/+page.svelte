<script>
  export let data;
  $: timelineData = data.workExperiencenTimeline.workExperiencenTimeline;
</script>

{#if timelineData && timelineData.length > 0}
  <div class="container mx-auto">
    <h1 class="page-title">Work Experience</h1>
    <ol class="relative border-l border-gray-200 mt-3">
      {#each timelineData.reverse() as item}
        <li class="mb-10 ml-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          />

          <img
            src={`/images/${item.logo}`}
            alt={item.company}
            class="rounded-full h-1/4 w-1/3 object-contain"
          />
          <h2 class="text-lg font-bold dark:text-white mt-3">
            {item.title}
          </h2>
          <time class="mb-1 font-semibold">{item.date}</time>
          <ul class="list-disc list-inside">
            {#each item.description as bullet}
              <li>{bullet}</li>
            {/each}
          </ul>
        </li>
      {/each}
    </ol>
  </div>
{/if}
