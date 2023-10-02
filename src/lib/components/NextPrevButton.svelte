<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";
  import { data } from "$lib/data/routes";
  let routes = data.routes;

  function nextPage() {
    goto(routes[$page.url.pathname]);
  }

  function previousPage() {
    const numberOfEntries = history.length;
    if (numberOfEntries <= 1) {
      goto("/");
    } else {
      history.back();
    }
  }
</script>

{#if $page.url.pathname !== "/"}
  <div class="flex mt-3 md:hidden">
    <div class="flex w-1/2">
      <button class="w-full rounded shadow-md" on:click={previousPage}>
        <Icon icon="carbon:previous-filled" class="h-12 w-12" />
      </button>
    </div>
    <div class="flex w-1/2">
      <button
        class="flex w-full rounded shadow-md items-center justify-end"
        on:click={nextPage}
      >
        <Icon icon="carbon:next-filled" class="h-12 w-12" />
      </button>
    </div>
  </div>
{/if}
