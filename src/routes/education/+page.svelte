<script>
  export let data;
  let timelineData = data.educationTimeline.educationTimeline;
</script>

<div class="container mx-auto">
  <h1 class="page-title">Education</h1>
  <ol class="relative border-l border-gray-200 mt-3">
    {#each timelineData as item}
      <li class="mb-10 ml-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
        />
        <img
          src={`/images/${item.logo}`}
          alt={item.institution}
          class="rounded-full h-1/4 w-1/3"
        />
        <h2 class="text-lg font-bold dark:text-white mt-3">
          {item.degree} : {item.field}
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
