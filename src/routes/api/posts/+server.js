import { SITE_KEY, SECERT_KEY, GOOGLE_PROJECT_ID } from "$env/static/private";

console.log(SITE_KEY, SECERT_KEY, GOOGLE_PROJECT_ID);

// POST https://recaptchaenterprise.googleapis.com/v1/projects/PROJECT_ID/assessments

export const POST = async ({ responseToken }) => {
  console.log("now is", responseToken);

  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${GOOGLE_PROJECT_ID}/assessments`;

  // Verify the reCAPTCHA response token
  // Call the verifyRecaptcha function from the previous example
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: {
      event: {
        token: responseToken,
        siteKey: SITE_KEY,
        expectedAction: "LOGIN",
      },
    },
  });
  console.log(response);

  if (response.riskAnalysis?.score < 0.5) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  } else {
    return new Response(JSON.stringify({ success: true }), { status: 201 });
  }
};
