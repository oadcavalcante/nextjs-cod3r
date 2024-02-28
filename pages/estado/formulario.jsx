import { useState } from "react";

export default function formulario() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [valor, setValor] = useState("");

  function alterarInput() {
    setValor(valor + "!");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
      <span>{valor}</span>
      <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
      <button onClick={alterarInput}>Alterar</button>
    </div>
  );
}
