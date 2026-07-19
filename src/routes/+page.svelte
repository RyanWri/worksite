<script>
  export let data;
  export let about = data.about;
  export let clients = data.clients;
  import Icon from "@iconify/svelte";

  const companies = [...new Set(clients.map((c) => c.company))];
</script>

<svelte:head>
  <title>{about.name} - {about.profession}</title>
  <meta name="description" content={about.description} />
</svelte:head>

<!-- Hero -->
<section class="container py-12 sm:py-16 md:py-20">
  <div class="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
    <div class="text-center md:text-left flex-1">
      <div
        class="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
      >
        <Icon icon="mdi:star" class="w-4 h-4 mr-1" />
        <span>{about.profession}</span>
      </div>
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {about.name}
      </h1>
      <p
        class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8"
      >
        {about.description}
      </p>
      <div
        class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4"
      >
        <a
          href="/contact"
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Get in Touch
          <Icon icon="mdi:arrow-right" class="w-5 h-5 ml-2" />
        </a>
        <a
          href="/about"
          class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          More About Me
        </a>
      </div>
    </div>
    <img
      src="/images/me.webp"
      alt={about.name}
      width="256"
      height="256"
      class="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover shadow-md"
    />
  </div>
</section>

<!-- Trusted By -->
{#if companies.length > 0}
  <section class="bg-gray-50 dark:bg-gray-800 py-8 sm:py-10">
    <div class="container">
      <p
        class="text-center text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-5"
      >
        Trusted by teams at
      </p>
      <div
        class="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto"
      >
        {#each companies as company}
          <span
            class="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm sm:text-base text-gray-700 dark:text-gray-300"
          >
            {company}
          </span>
        {/each}
      </div>
    </div>
  </section>
{/if}

<!-- Featured Work -->
{#if about.projects?.length > 0}
  <section class="container py-12 sm:py-16">
    <h2
      class="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-10"
    >
      Featured Work
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {#each about.projects as project}
        <div
          class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
        >
          <h3
            class="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3"
          >
            {project.title}
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            View Case Study
            <Icon icon="mdi:arrow-right" class="w-4 h-4 ml-1" />
          </a>
        </div>
      {/each}
    </div>
  </section>
{/if}

<!-- Where I Share -->
<section class="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16">
  <div class="container">
    <h2
      class="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-10"
    >
      Follow My Work
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
      <a
        href="https://www.linkedin.com/in/ran-wright46/"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-4 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
      >
        <Icon icon="mdi:linkedin" class="w-8 h-8 text-blue-600 flex-shrink-0" />
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Writing on AI, data platforms, and engineering
          </p>
        </div>
      </a>
      <a
        href="https://github.com/RyanWri"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-4 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
      >
        <Icon icon="mdi:github" class="w-8 h-8 text-gray-900 dark:text-white flex-shrink-0" />
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">GitHub</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Code, experiments, and open-source work
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="container py-12 sm:py-16 text-center">
  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
    Have a project in mind?
  </h2>
  <p class="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-6">
    I help teams turn complex data and AI challenges into scalable, production-ready systems.
  </p>
  <a
    href="/contact"
    class="inline-flex items-center px-6 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
  >
    Let's Talk
    <Icon icon="mdi:arrow-right" class="w-5 h-5 ml-2" />
  </a>
</section>
