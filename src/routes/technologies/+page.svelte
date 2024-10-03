<script>
  export let data;
  export let skillsData = data.skillsData; // Received from SSR
  import Icon from "@iconify/svelte"; // Import Iconify-Svelte for icons
</script>

<svelte:head>
  <title>Technologies - The Wright Way</title>
  <meta
    name="description"
    content="Explore our expertise in various technology stacks, including cloud providers, programming languages, machine learning frameworks, and more."
  />
  <meta
    name="keywords"
    content="AWS, Python, Java, Svelte, React, Kubernetes, DevOps, Machine Learning, Technologies, Experts"
  />
</svelte:head>

<div class="container mx-auto p-6">
  <h1 class="page-title text-3xl font-bold mb-6">Technologies</h1>

  <!-- Render technology stacks -->
  {#each skillsData as stack (stack.category)}
    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
        {stack.category}
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each stack.technologies as techIcon}
          <div
            class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center border border-gray-200 dark:border-gray-700"
          >
            <Icon icon={techIcon} class="w-12 h-12 mb-2" />
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>
