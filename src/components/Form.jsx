import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Form() {
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  function handleClear() {
    setName("");
    setServiceNumber("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted locally. Values are saved in localStorage for this demo.");
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px", maxWidth: 420 }}>
      <label>
        Name
        <input
          data-testid="name"
          type="text"
          placeholder="e.g. Alex Kim"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Service Number
        <input
          data-testid="serviceNumber"
          type="text"
          placeholder="e.g. 12345"
          value={serviceNumber}
          onChange={(e) => setServiceNumber(e.target.value)}
        />
      </label>

      <div style={{ display: "flex", gap: "8px" }}>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </div>
    </form>
  );
}
