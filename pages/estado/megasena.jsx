import { useEffect, useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";
import { mega } from "../../functions/mega";

export default function megasena() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [qtde, setQtde] = useState(6);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [numeros, setNumeros] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setNumeros(mega());
  }, []);

  function renderizarNumeros() {
    return numeros.map((numero) => <NumeroDisplay key={numero} numero={numero} />);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>Mega Sena</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {renderizarNumeros()}
      </div>
      <div>
        <input type="number" min={6} max={20} value={qtde} onChange={(ev) => setQtde(+ev.target.value)} />
        <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
      </div>
    </div>
  );
}
