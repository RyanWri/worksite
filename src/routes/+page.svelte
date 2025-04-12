<script>
  export let data;
  export let services = data.services;
  import Icon from "@iconify/svelte";
</script>

<!-- Skip Link for Keyboard Navigation -->
<a
  href="#services-content"
  class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50"
>
  Skip to services content
</a>

<!-- Services Section -->
<section
  id="services-content"
  class="container py-8 sm:py-12"
  aria-labelledby="services-heading"
>
  <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
    <h1 id="services-heading" class="heading-1 mb-3 sm:mb-4">Our Services</h1>
    <p class="text-body text-base sm:text-lg md:text-xl">
      Unlock the full potential of your business with innovative, scalable
      solutions. From data engineering to AI and cloud architecture, we deliver
      expertise that drives success.
    </p>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
  >
    {#each services as service}
      <article class="card flex flex-col items-center">
        <div
          class="mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-gray-50 dark:bg-gray-700"
        >
          <Icon
            icon={service.icon}
            class="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 dark:text-white"
          />
        </div>
        <h2 class="heading-3 mb-2 text-center">
          {service.title}
        </h2>
        <p class="text-body text-sm sm:text-base text-center">
          {service.description}
        </p>
      </article>
    {/each}
  </div>
</section>

<hr
  class="my-6 sm:my-8 border-gray-200 dark:border-gray-700 max-w-7xl mx-auto"
  aria-hidden="true"
/>
