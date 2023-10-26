<script>
  export let profileDetails;
</script>

<div class="grid grid-cols-2 md:grid-cols-3 mb-4 gap-1">
  <div class="md:ml-8">
    <h2 class="text-xl font-semibold">Name</h2>
    <h3 class="text-lg">{profileDetails.name}</h3>
  </div>
  <div>
    <h2 class="text-xl font-semibold">Occupation</h2>
    <p class="text-lg">{profileDetails.occupation}</p>
  </div>
  <div>
    <h2 class="text-lg font-semibold">Eligbile to work in</h2>
    <p>
      {#each profileDetails.eligible_countries as country}
        {country}
      {/each}
    </p>
  </div>
  <div class="md:ml-8">
    <div>
      <h2 class="text-xl font-semibold">Email</h2>
      <p class="text-lg">{profileDetails.email}</p>
    </div>
  </div>
  <div>
    <h2 class="text-xl font-semibold">Phone Number</h2>
    <p class="text-lg">{profileDetails.phone}</p>
  </div>
  <div>
    <h2 class="text-xl font-semibold">Location</h2>
    <p class="text-lg">{profileDetails.location}</p>
  </div>
</div>
