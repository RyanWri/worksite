<script>
  /** @type {import('./$types').PageData} */
  const siteKey = "6Ld0OsIoAAAAAJ6pYw-ya6ZQfW23GJk41rNvLOk4";
  const userAction = "LOGIN";
  let name = "";

  // Handle the form submission
  async function handleSubmit(event) {
    event.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute(siteKey, {
        action: userAction,
      });
      // IMPORTANT: The 'token' that results from execute is an encrypted response sent by
      // reCAPTCHA Enterprise to the end user's browser.
      // This token must be validated by creating an assessment.
      // See https://cloud.google.com/recaptcha-enterprise/docs/create-assessment

      // Send the POST request to the API endpoint
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
    });
  }
</script>

<head>
  <script
    src="https://www.google.com/recaptcha/enterprise.js?render={siteKey}"
  ></script>
</head>

<div class="container mx-auto py-4">
  <form
    on:submit|preventDefault={handleSubmit}
    class="max-w-md mx-auto"
    id="captcha-form"
  >
    <div class="g-recaptcha" data-sitekey={siteKey} />
    <label for="name" class="block mb-2">Name:</label>
    <input
      type="text"
      id="name"
      bind:value={name}
      class="w-full p-2 border border-gray-300 rounded"
      required
    />

    <p class="hidden">
      <label for="nickname" class="block mb-2">Nickname:</label>
      <input
        type="text"
        id="nickname"
        name="nickname"
        class="w-full p-2 border border-gray-300 rounded"
      />
    </p>

    <button
      type="submit"
      class="py-2 px-4 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >Submit</button
    >
  </form>
</div>
