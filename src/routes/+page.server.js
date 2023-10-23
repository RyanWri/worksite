/** @type {import('./$types').PageServerLoad} */
import axios from "axios";
import fs from "fs";

// Define the reCAPTCHA verification endpoint
export async function load(request) {
  const envFile = fs.readFileSync(".env", "utf8");
  const envVariables = envFile
    .toString()
    .split("\n")
    .reduce((result, line) => {
      const [key, value] = line.split("=");
      result[key.trim()] = value.trim();
      return result;
    }, {});

  // Access environment variables
  console.log(envVariables.SITE_KEY);

  const { response } = request.body;

  // Make a request to Google reCAPTCHA verification endpoint
  const verificationUrl = "https://www.google.com/recaptcha/api/siteverify";
  const secretKey = envVariables.SECERT_KEY;
  const verifyResponse = await axios.post(verificationUrl, null, {
    params: {
      secret: secretKey,
      response,
    },
  });

  // Handle the verification response
  if (verifyResponse.data.success) {
    // reCAPTCHA response is valid, continue with your desired logic
    // e.g., save data to database, send a confirmation email, etc.
    return {
      status: 200,
      body: { success: true },
    };
  } else {
    // reCAPTCHA response is invalid, handle the error
    return {
      status: 400,
      body: { success: false, error: "Invalid reCAPTCHA response" },
    };
  }
}
