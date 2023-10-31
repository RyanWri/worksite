export const GET = async (request, response) => {
  let body = request.body;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const mail = await fetch(
    `https://api.eva.pingutil.com/email?email=${body.email}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  console.log(mail);
  if (mail) {
    return response.status(200).json({ mail });
  } else {
    return response
      .status(400)
      .json({ error: "invalid or low score email validation" });
  }
};
