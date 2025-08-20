import Form from "./form";

export default function App() {
  return (
    <main style={{ fontFamily: "system-ui, Arial, sans-serif", padding: 16 }}>
      <h1>Repair Request</h1>
      <p>Type in your details, refresh the page, and notice your inputs persist.</p>
      <Form />
    </main>
  );
}
