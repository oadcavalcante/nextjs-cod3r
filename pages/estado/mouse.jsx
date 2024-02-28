import { useState } from "react";

export default function mouse() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [x, alterarX] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [y, alterarY] = useState(0);

  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
  };

  function quandoMover(ev) {
    alterarX(ev.clientX);
    alterarY(ev.clientY);
  }

  return (
    <div style={styles} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  );
}
