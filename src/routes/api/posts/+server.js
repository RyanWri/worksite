import { SITE_KEY, SECERT_KEY } from "$env/static/private";

console.log(SITE_KEY, SECERT_KEY);

export const POST = async ({ request }) => {
  const { responseToken } = request.body;
  console.log(responseToken);

  const url = "https://www.google.com/recaptcha/api/siteverify";

  // Verify the reCAPTCHA response token
  // Call the verifyRecaptcha function from the previous example
  const isHuman = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${SECERT_KEY}&response=${responseToken}`,
  });

  return new Response(JSON.stringify({ success: isHuman }), { status: 201 });
};
