<script>
  export let data;
  export let services = data.services;
  export let training = data.training;
  export let education = data.education;
  import Icon from "@iconify/svelte";
</script>

<!-- Services Section -->
<section class="container mx-auto p-8">
  <h1 class="text-4xl font-bold text-center mb-12">Our Services</h1>
  <p class="text-xl text-center text-gray-700 dark:text-gray-300 mb-8">
    Unlock the full potential of your business with innovative, scalable
    solutions. From data engineering to AI and cloud architecture, we deliver
    expertise that drives success. Explore our services and discover how we can
    help you lead in the digital age.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each services as service}
      <div
        class="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105"
      >
        <Icon
          icon={service.icon}
          class="h-16 w-16 mb-4 text-gray-700 dark:text-white"
        />
        <h2 class="text-2xl font-bold dark:text-white">{service.title}</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-2 text-center">
          {service.description}
        </p>
      </div>
    {/each}
  </div>
</section>

<!-- Divider -->
<hr class="my-12 border-gray-300 dark:border-gray-600" />

<!-- Training Section -->
<section class="container mx-auto p-8">
  <h1 class="text-4xl font-bold text-center mb-12">Training</h1>
  <p class="text-xl text-center text-gray-700 dark:text-gray-300 mb-8">
    Upskill your team with hands-on training that empowers your employees with
    the latest technologies and methodologies. Whether it's data engineering,
    DevOps, or software design patterns, our expert-led training sessions are
    designed to foster growth and innovation.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each training as course}
      <div
        class="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105"
      >
        <Icon
          icon={course.icon}
          class="h-16 w-16 mb-4 text-gray-700 dark:text-white"
        />
        <h2 class="text-2xl font-bold text-center dark:text-white">
          {course.title}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mt-2 text-center">
          {course.description}
        </p>
      </div>
    {/each}
  </div>
</section>

<!-- Divider -->
<hr class="my-12 border-gray-300 dark:border-gray-600" />

<!-- Education Section -->
<section class="container mx-auto p-8">
  <h1 class="text-4xl font-bold text-center mb-12">Education</h1>
  <p class="text-xl text-center text-gray-700 dark:text-gray-300 mb-8">
    Stay ahead of the curve with our educational programs, designed to keep you
    at the forefront of the tech industry. From foundational software principles
    to advanced data modeling and CI/CD best practices, our courses ensure you
    have the knowledge to thrive.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each education as edu}
      <div
        class="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105"
      >
        <Icon
          icon={edu.icon}
          class="h-16 w-16 mb-4 text-gray-700 dark:text-white"
        />
        <h2 class="text-2xl font-bold dark:text-white">{edu.title}</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-2 text-center">
          {edu.description}
        </p>
      </div>
    {/each}
  </div>
</section>
