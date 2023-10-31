export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const senderName = form.get("senderName");
    const email = form.get("email");
    const messageText = form.get("messageText");
  },
};
