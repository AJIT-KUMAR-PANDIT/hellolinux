import { useLoaderData, Form, useActionData } from "react-router";

/**
 * Chat component that demonstrates data loading and actions.
 */
export default function Chat() {
  const data = useLoaderData();
  const actionData = useActionData();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Chat Page</h1>
      <p>Data from loader: {data?.message}</p>

      <Form method="post" style={{ marginTop: "20px" }}>
        <input 
          type="text" 
          name="prompt" 
          placeholder="Type something..." 
          required 
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button 
          type="submit" 
          style={{ marginLeft: "10px", padding: "8px 16px", cursor: "pointer" }}
        >
          Send
        </button>
      </Form>

      {actionData?.response && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <strong>Response:</strong> {actionData.response}
        </div>
      )}
    </div>
  );
}
