<script>
  import Icon from "@iconify/svelte";
  export let data;

  $: hobbies = data.hobbies;
</script>

{#if hobbies && hobbies.length > 0}
  <div class="container mx-auto mb-4 mt-2 lg:mt-0">
    <h1 class="page-title">My Hobbies</h1>
    <ul
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x-4 divide-y-2 gap-4"
    >
      {#each hobbies as hobby}
        <li class="border-1 p-4 rounded mb-2">
          <Icon icon={hobby.logo} class="h-16 w-16 md:h-1/3 md:w-1/3" />
          <p class="mt-1 pt-1 md:text-xl">{hobby.description}</p>
        </li>
      {/each}
    </ul>
  </div>
{/if}
