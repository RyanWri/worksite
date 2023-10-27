<!-- ContactForm.svelte -->
<script>
  let senderName = "";
  let company = "";
  let email = "";
  let linkedin = "";
  let errors = {};
  let isClient = typeof window !== "undefined";

  async function handleSubmit() {
    // Reset errors
    errors = {};

    // Validate form fields
    if (!senderName) {
      errors.senderName = "Sender Name is required";
    }
    if (!company) {
      errors.company = "Company is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!linkedin) {
      errors.linkedin = "LinkedIn is required";
    }

    // Check if there are any validation errors
    if (Object.keys(errors).length > 0) {
      // Handle validation errors
      console.log(errors);
      return;
    }

    // Create form data
    const formData = {
      senderName,
      company,
      email,
      linkedin,
    };

    // Send email
    console.log(formData);

    // Reset form fields
    senderName = "";
    company = "";
    email = "";
    linkedin = "";
  }
</script>

<div class="container mx-auto py-4">
  <h1 class="page-title">Contact Me</h1>
  {#if isClient}
    <form class="max-w-md mx-auto" on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label for="senderName" class="block text-gray-700 font-bold mb-2"
          >Sender Name</label
        >
        <input
          type="text"
          id="senderName"
          bind:value={senderName}
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {#if errors && errors.senderName}
          <p class="text-red-500">{errors.senderName}</p>
        {/if}
      </div>
      <div class="mb-4">
        <label for="company" class="block text-gray-700 font-bold mb-2"
          >Company</label
        >
        <input
          type="text"
          id="company"
          bind:value={company}
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {#if errors && errors.company}
          <p class="text-red-500">{errors.company}</p>
        {/if}
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2"
          >Email</label
        >
        <input
          type="email"
          id="email"
          bind:value={email}
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {#if errors && errors.email}
          <p class="text-red-500">{errors.email}</p>
        {/if}
      </div>
      <div class="mb-4">
        <label for="linkedin" class="block text-gray-700 font-bold mb-2"
          >LinkedIn</label
        >
        <input
          type="text"
          id="linkedin"
          bind:value={linkedin}
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {#if errors && errors.linkedin}
          <p class="text-red-500">{errors.linkedin}</p>
        {/if}
      </div>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Submit</button
      >
    </form>
  {/if}
</div>
