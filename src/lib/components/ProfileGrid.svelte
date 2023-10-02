<script>
  export let profile_details;
</script>

<div class="grid grid-cols-2 md:grid-cols-3 mb-4 gap-1">
  <div class="md:ml-8">
    <h2 class="text-xl font-semibold">Name</h2>
    <h3 class="text-lg">{profile_details.name}</h3>
  </div>
  <div>
    <h2 class="text-xl font-semibold">Occupation</h2>
    <p class="text-lg">{profile_details.occupation}</p>
  </div>
  <div>
    <h2 class="text-lg font-semibold">Eligbile to work in</h2>
    <p>
      {#each profile_details.eligible_countries as country}
        {country}
      {/each}
    </p>
  </div>
  <div class="md:ml-8">
    <div>
      <h2 class="text-xl font-semibold">Email</h2>
      <p class="text-lg">{profile_details.email}</p>
    </div>
  </div>
  <div>
    <h2 class="text-xl font-semibold">Phone Number</h2>
    <p class="text-lg">{profile_details.phone}</p>
  </div>
  <div>
    <h2 class="text-xl font-semibold">Location</h2>
    <p class="text-lg">{profile_details.location}</p>
  </div>
</div>
