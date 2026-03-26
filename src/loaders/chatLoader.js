/**
 * Loader function for the Chat route.
 * Handles pre-fetching data before the component renders.
 */
export async function chatLoader() {
  return { message: "Hello from loader" };
}
