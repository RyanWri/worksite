<script>
  import { onMount } from "svelte";

  let animate = false;

  // Start the animation when the component mounts
  onMount(() => {
    animate = true;
  });
</script>

<svelte:head>
  <title>About</title>
  <meta
    name="description"
    content="This is a professional website of Ryan Wright"
  />
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
  <div>
    <div class="col-auto">
      <img
        src="/images/me.webp"
        alt="Ryan Wright"
        class="w-32 h-32 rounded-full"
      />
    </div>
    <div class="md:col-span-2">
      <h4
        class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        <span class:animate class="animated-text">
          Ryan (Ran) Wright,<br /> Software Engineer Consultant.
        </span>
      </h4>
    </div>
  </div>
  <div>
    <p class="pt-6 font-body leading-relaxed text-grey-20">
      <span class:animate class="animated-paragraph">
        I am a software engineer consultant, highly skilled professional who
        provides expert advice and guidance on software development projects.
        With a deep understanding of programming languages, frameworks, and best
        practices, I help my clients optimize code, improve system performance,
        and offer strategic recommendations to enhance software development
        processes. After gaining technical expertise throughout multiple
        projects across several industries I am able to help organizations
        overcome complex challenges, streamline workflows, and deliver
        high-quality software solutions.
      </span>
    </p>
  </div>
</div>
