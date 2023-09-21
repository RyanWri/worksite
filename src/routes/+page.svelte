<script>
  import { onMount } from "svelte";
  let animate = false;

  // Start the animation when the component mounts
  onMount(() => {
    animate = true;
  });
</script>

<div class="grid grid-cols-3 md:grid-rows-1 md:grid-cols-2 gap-2 p-2 mx-auto">
  <div>
    <img
      src="/images/me.webp"
      alt="Ryan Wright"
      class="w-32 h-32 rounded-full"
    />
  </div>
  <div class="col-span-2">
    <h4 class="pr-3 pt-2 font-header text-xl text-black sm:text-lg lg:text-2xl">
      <span class:animate class="animated-text">
        Ryan (Ran) Wright,<br /> Software Engineer Consultant.
      </span>
    </h4>
  </div>
  <div class="col-span-3">
    <p class="pt-2 text-xl leading-relaxed text-grey-20">
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
