import { useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";

export default function contador() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [numero, setNumero] = useState(0);

  const stylesDiv = {
    fontFamily: ["Inter", "sans-serif"],
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    rowGap: "10px",
    alignItems: "center",
    backgroundColor: "black",
    padding: "20px",
    color: "#fff",
    height: "100vh",
  };

  const stylesButtons = {
    display: "flex",
    columnGap: "10px",
  };

  const styleButton = {
    backgroundColor: "#faffaa",
    width: "50px",
    height: "50px",
    borderRadius: "10px",
    border: "0px",
  };

  function incrementar() {
    setNumero(numero + 1);
  }

  function decrementar() {
    setNumero(numero - 1);
  }

  return (
    <>
      <div style={stylesDiv} className="container">
        <h1>Contador</h1>
        <div>
          <NumeroDisplay numero={numero} />
        </div>
        <div style={stylesButtons} className="botoes">
          <button style={styleButton} onClick={decrementar}>
            -
          </button>
          <button style={styleButton} onClick={incrementar}>
            +
          </button>
        </div>
      </div>
    </>
  );
}
