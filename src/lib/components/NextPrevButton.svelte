<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";
  // const modules = import.meta.glob("../../routes/**/*.svelte");
  // console.log(modules);
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

<div class="grid grid-row grid-cols-2 gap-2 mt-3 md:hidden">
  <div>
    <button class="w-full rounded shadow-md" on:click={previousPage}>
      <Icon icon="carbon:previous-filled" class="h-12 w-12" />
    </button>
  </div>
  <div>
    <button
      class="w-full rounded shadow-md inline-flex items-end"
      on:click={nextPage}
    >
      <Icon icon="carbon:next-filled" class="inline-block h-12 w-12" />
    </button>
  </div>
</div>
