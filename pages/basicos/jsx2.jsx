export default function jsx2() {
  const pessoas = [<li>Paulo</li>, <li>Ana</li>, <li>Pedro</li>];

  const conteudo = (
    <div>
      <h1>JSX #02</h1>
    </div>
  );
  return [conteudo, pessoas];
}
