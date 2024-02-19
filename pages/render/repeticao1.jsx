export default function Repeticao1() {
  const listaAprovados = ["João", "Maria", "Ana", "Clara", "José", "Claudia"];

  return (
    //usando map()
    <div>
      {listaAprovados.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </div>
  );
}

//usando for()
// function renderizarLista() {
//   const itens = [];

//   for (let i = 0; i < listaAprovados.length; i++) {
//     itens.push(<li key={i}>{listaAprovados[i]}</li>);
//   }

//   return itens;
// }
