export async function POST(request) {
  const { senderName, email, messageText } = request.body;
  console.log(
    `Received form data: name=${senderName}, email=${email}, message=${messageText}`
  );

  // Send the form data to your API endpoint
  const response = await fetch(
    `https://api.eva.pingutil.com/email?email=${email}`
  );

  if (response.ok) {
    console.log("Form data sent successfully");
    console.log("email validation is", response);
    return {
      status: 200,
      body: "Form data sent successfully",
    };
  } else {
    console.error("Failed to send form data");
    return {
      status: response.status,
      body: "Failed to send form data",
    };
  }
}
