<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";

  const paths = ["/", "/projects", "/technologies", "/contact", "/sandbox"];
  const n = paths.length;

  function indexOfPage(forward = true) {
    let lastIndex = paths.lastIndexOf($page.url.pathname);
    if (forward) {
      return lastIndex === n - 1 ? 0 : lastIndex + 1;
    } else {
      return lastIndex === 0 ? n - 1 : lastIndex - 1;
    }
  }

  function nextPage() {
    const forward = true;
    const nextIndex = indexOfPage(forward);
    goto(paths[nextIndex]);
  }

  function previousPage() {
    const forward = false;
    const prevIndex = indexOfPage(forward);
    goto(paths[prevIndex]);
  }
</script>

<div class="grid-cols-2 gap-2 md:hidden">
  <div>
    <button class="w-full bg-blue-400" on:click={nextPage}>
      <Icon icon="carbon:next-filled" class="w-1/2" />
    </button>
  </div>
  <div>
    <button class="w-full bg-blue-400" on:click={previousPage}>
      <Icon icon="carbon:previous-filled" class="w-1/2" />
    </button>
  </div>
</div>
