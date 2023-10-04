<script>
  import Icon from "@iconify/svelte";
  import { data } from "./data";
  let hobbies = data.hobbies;
</script>

<main class="container mx-auto mb-4 mt-2 lg:mt-0">
  <h1 class="page-title">My Hobbies</h1>
  <ul class="grid grid-cols-2 divide-x-4 divide-y-2 md:grid-cols-3 gap-4">
    {#each hobbies as hobby}
      <li class="border-1 p-4 rounded mb-2">
        <Icon icon={hobby.logo} class="h-16 w-16" />
        <p class="mt-1">{hobby.description}</p>
      </li>
    {/each}
  </ul>
</main>
