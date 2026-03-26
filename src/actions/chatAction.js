/**
 * Action function for the Chat route.
 * Handles form submissions and data mutations.
 */
export async function chatAction({ request }) {
  const formData = await request.formData();
  const prompt = formData.get("prompt");

  return { response: `You said: ${prompt}` };
}
