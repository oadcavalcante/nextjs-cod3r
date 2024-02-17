import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <Titulo texto="Página de Cadastro" descricao="Incluir, alterar e excluir coisas!" />
      <Titulo texto="Página de Login" descricao="Informe o seu e-mail e senha." />
      <Titulo pequeno={true} texto="Página de Login" descricao="Informe o seu e-mail e senha." />
    </div>
  );
}
