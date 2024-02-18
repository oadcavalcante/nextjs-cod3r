import styles from "../pages/css/usandoEstilo.module.css";

export default function Estilo(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
          color: props.color,
          textAlign: props.direita ? "right" : "left",
          padding: "50px",
        }}
      >
        Texto #01
      </h1>
      <h2 className={props.numero >= 0 ? styles.azul : styles.vermelho}>Texto #02</h2>
    </div>
  );
}
