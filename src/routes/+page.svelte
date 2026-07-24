<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import { reveal } from "$lib/actions/reveal.js";

  export let data;
  const about = data.about;
  const clients = data.clients;

  const companies = [...new Set(clients.map((c) => c.company))];

  const SLIDE_SIZE = 3;
  const SLIDE_INTERVAL_MS = 3000;
  let slideStart = 0;
  let paused = false;

  $: visibleCompanies =
    companies.length <= SLIDE_SIZE
      ? companies
      : Array.from(
          { length: SLIDE_SIZE },
          (_, i) => companies[(slideStart + i) % companies.length],
        );

  onMount(() => {
    if (companies.length <= SLIDE_SIZE) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      if (!paused) {
        slideStart = (slideStart + SLIDE_SIZE) % companies.length;
      }
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  });
</script>

<svelte:head>
  <title>{about.name} - {about.profession}</title>
  <meta name="description" content={about.description} />
</svelte:head>

<!-- Hero -->
<section class="container py-16 sm:py-20 md:py-28">
  <div
    class="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16"
    use:reveal
  >
    <div class="flex-1 text-center md:text-left">
      <p
        class="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
      >
        &lt; {about.profession} /&gt;
      </p>
      <h1
        class="mb-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
      >
        {about.name}
      </h1>
      <p
        class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted md:mx-0"
      >
        {about.description}
      </p>
      <div
        class="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:justify-start"
      >
        <a
          href="mailto:ranman37@gmail.com"
          class="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
        >
          Get in Touch
          <Icon icon="mdi:arrow-right" class="ml-2 h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/ran-wright46/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex w-full items-center justify-center rounded-md border border-border px-6 py-3 text-base font-medium text-fg transition-colors hover:border-accent hover:text-accent sm:w-auto"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
    <div class="relative shrink-0">
      <div
        class="absolute -inset-1 rounded-full bg-accent/20 blur-2xl"
        aria-hidden="true"
      ></div>
      <img
        src="/images/me.webp"
        alt={about.name}
        width="256"
        height="256"
        class="relative h-40 w-40 rounded-full object-cover ring-1 ring-border sm:h-52 sm:w-52 md:h-64 md:w-64"
      />
    </div>
  </div>
</section>

<!-- Trusted By -->
{#if companies.length > 0}
  <section class="border-y border-border bg-surface py-10">
    <div class="container" use:reveal>
      <p
        class="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted"
      >
        Trusted by teams at
      </p>
      <span class="sr-only">Trusted by: {companies.join(", ")}</span>
      <div
        class="mx-auto flex max-w-4xl min-h-[2.75rem] flex-wrap justify-center gap-2 sm:gap-3"
        role="group"
        aria-label="Trusted by companies (rotating selection)"
        aria-hidden="true"
        on:mouseenter={() => (paused = true)}
        on:mouseleave={() => (paused = false)}
      >
        {#key slideStart}
          {#each visibleCompanies as company (company)}
            <span
              in:fly={{ x: 24, duration: 400 }}
              class="rounded-full border border-border bg-bg px-4 py-1.5 text-sm text-muted"
            >
              {company}
            </span>
          {/each}
        {/key}
      </div>
    </div>
  </section>
{/if}

<!-- Featured Work -->
{#if about.projects?.length > 0}
  <section class="container py-16 sm:py-24">
    <p
      class="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"
      use:reveal
    >
      01 · Featured Work
    </p>
    <h2
      class="mb-10 text-2xl font-bold tracking-tight sm:text-3xl"
      use:reveal
    >
      Selected projects
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      {#each about.projects as project}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent"
          use:reveal
        >
          <h3
            class="mb-3 text-xl font-bold tracking-tight transition-colors group-hover:text-accent"
          >
            {project.title}
          </h3>
          <p class="mb-6 flex-grow leading-relaxed text-muted">
            {project.description}
          </p>
          <span class="inline-flex items-center font-medium text-accent">
            View case study
            <Icon
              icon="mdi:arrow-right"
              class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </span>
        </a>
      {/each}
    </div>
  </section>
{/if}

<!-- Follow My Work -->
<section class="border-t border-border bg-surface py-16 sm:py-24">
  <div class="container">
    <p
      class="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"
      use:reveal
    >
      02 · Elsewhere
    </p>
    <h2
      class="mb-10 text-2xl font-bold tracking-tight sm:text-3xl"
      use:reveal
    >
      Follow my work
    </h2>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <a
        href="https://www.linkedin.com/in/ran-wright46/"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-4 rounded-lg border border-border bg-bg p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent"
        use:reveal
      >
        <Icon
          icon="mdi:linkedin"
          class="h-8 w-8 shrink-0 text-muted transition-colors group-hover:text-accent"
        />
        <div>
          <p class="font-semibold">LinkedIn</p>
          <p class="text-sm text-muted">
            Writing on AI, data platforms, and engineering
          </p>
        </div>
      </a>
      <a
        href="https://github.com/RyanWri"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-4 rounded-lg border border-border bg-bg p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent"
        use:reveal
      >
        <Icon
          icon="mdi:github"
          class="h-8 w-8 shrink-0 text-muted transition-colors group-hover:text-accent"
        />
        <div>
          <p class="font-semibold">GitHub</p>
          <p class="text-sm text-muted">
            Code, experiments, and open-source work
          </p>
        </div>
      </a>
      <a
        href="https://medium.com/@rrwdev"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-4 rounded-lg border border-border bg-bg p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent"
        use:reveal
      >
        <Icon
          icon="mdi:medium"
          class="h-8 w-8 shrink-0 text-muted transition-colors group-hover:text-accent"
        />
        <div>
          <p class="font-semibold">Medium</p>
          <p class="text-sm text-muted">Articles on AI and data platforms</p>
        </div>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="container py-20 text-center sm:py-28">
  <div use:reveal>
    <h2 class="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
      Have a project in mind?
    </h2>
    <p class="mx-auto mb-8 max-w-xl leading-relaxed text-muted">
      I help teams turn complex data and AI challenges into scalable,
      production-ready systems.
    </p>
    <a
      href="mailto:ranman37@gmail.com"
      class="inline-flex items-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover"
    >
      Let's Talk
      <Icon icon="mdi:arrow-right" class="ml-2 h-5 w-5" />
    </a>
  </div>
</section>
