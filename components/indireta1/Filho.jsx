export default function Filho(props) {
  // "Passei no ENEM!"
  console.log(props.funcao);
  return (
    <div>
      <h1>Filho #alterado</h1>
      <button onClick={props.funcao}>Falar com o Pai</button>
    </div>
  );
}
