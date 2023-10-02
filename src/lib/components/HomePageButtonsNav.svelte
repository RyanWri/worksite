<script>
  import { goto } from "$app/navigation";
</script>

<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-3">
  <div>
    <button
      class="bg-cyan-500 text-white font-bold ml-1 py-2 px-4 rounded-full shadow-md"
      on:click={() => goto("/experience")}
    >
      Click here to see my work Experience
    </button>
  </div>
  <div>
    <button
      class="bg-teal-400 text-white font-bold ml-1 py-2 px-4 rounded-full shadow-md"
      on:click={() => goto("/education")}
    >
      List of my degrees and certificats
    </button>
  </div>
  <div>
    <button
      class="bg-sky-400 text-white font-bold ml-1 py-2 px-4 rounded-full shadow-md"
      on:click={() => goto("/skills")}
    >
      Want to see technologies i work with?
    </button>
  </div>
</div>
