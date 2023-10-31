export async function GET({ request, response }) {
  console.log(request);
  console.log("Email validation", request.params);
  const { slug } = request.params;

  const disifyEmailUrlValidator = `https://disify.com/api/email/${slug}`;
  const resp = await fetch(disifyEmailUrlValidator);

  if (resp.ok) {
    console.log("Email verified");
    console.log(resp.json());
    return new Response(
      JSON.stringify({
        status: 200,
        body: "Email verified",
      })
    );
  } else {
    console.log("Email not verified");
    return new Response(
      json.stringify({
        status: response.status,
        body: "Failed to send form data",
      })
    );
  }
}
