// +page.server.js

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
    const email = formData.get("email");
    console.log(email);

    // Perform validation logic here
    const isValidEmail = await validateEmail(email);
    console.log("email validation is", isValidEmail);
    const f = isValidEmail.format;

    if (f) {
      // Handle successful form submission
      return {
        status: 200,
        body: "Form submitted successfully!",
      };
    } else {
      // Handle form submission with invalid email
      return {
        status: 400,
        body: "Invalid email address",
      };
    }
  },
};

async function validateEmail(email) {
  const disifyEmailUrlValidator = `https://disify.com/api/email/${email}`;
  const resp = await fetch(disifyEmailUrlValidator, {
    method: "GET",
  });
  return resp.json();
  // if (
  //   resp?.whitelist === true &&
  //   resp?.disposable === false &&
  //   resp?.dns === true &&
  //   resp?.format === true
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
}
