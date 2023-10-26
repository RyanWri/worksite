import { createClient } from "@vercel/kv";

export default async function handler(request, response) {
  const users = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  const user = await users.hgetall("user:me");
  console.log(user);
  return response.status(200).json({ user });
}
