export default function Titulo(props) {
  return props.pequeno ? (
    <>
      <p>{props.texto}</p>
      <span>{props.descricao}</span>
    </>
  ) : (
    <>
      <h1>{props.texto}</h1>
      <h2>{props.descricao}</h2>
    </>
  );
}
