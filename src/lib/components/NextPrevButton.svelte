<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";

  const paths = ["/", "/projects", "/technologies", "/contact", "/sandbox"];
  const n = paths.length;

  function nextPage() {
    let lastIndex = paths.lastIndexOf($page.url.pathname);
    if (lastIndex === n - 1) {
      lastIndex = 0;
    } else {
      lastIndex++;
    }
    goto(paths[lastIndex]);
  }

  function previousPage() {
    let lastIndex = paths.lastIndexOf($page.url.pathname);
    if (lastIndex === 0) {
      lastIndex = n - 1;
    } else {
      lastIndex--;
    }
    goto(paths[lastIndex]);
  }
</script>

<div class="grid-cols-2 gap-2">
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
