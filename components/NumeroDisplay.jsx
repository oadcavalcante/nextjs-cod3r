export default function NumeroDisplay(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "50px",
        borderRadius: "50px",
        background: "#222",
        color: "#FFF",
        fontSize: "2rem",
        padding: "10px",
      }}
    >
      {props.numero}
    </div>
  );
}
