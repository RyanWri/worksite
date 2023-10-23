<script>
  import { onMount } from "svelte";
  // Handle the form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.target);

    // Get the reCAPTCHA response token from the form data
    const responseToken = formData.get("g-recaptcha-response");

    // Send the POST request to the API endpoint
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ responseToken }),
    });

    // Handle the response
    const data = await response.json();
    console.log(data); // Do something with the verification result
  }

  onMount(() => {
    const form = document.getElementById("captcha-form");
    form.addEventListener("submit", handleSubmit);
  });
</script>

<head>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<div class="container mx-auto py-4">
  <form action="?" method="POST" id="captcha-form">
    <div
      class="g-recaptcha"
      data-sitekey="6Ld0OsIoAAAAAJ6pYw-ya6ZQfW23GJk41rNvLOk4"
    />
    <br />
    <input type="submit" value="Submit" />
  </form>
</div>
