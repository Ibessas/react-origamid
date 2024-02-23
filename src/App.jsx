import Eventos from "./Eventos";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const Exercicio1 = ({ dados }) => {
  const total = dados.compras.reduce(
    (acc, crv) => acc + Number(crv.preco.replace("R$ ", "")),
    0
  );
  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total gasto: R$ {total}</p>
      {total > 10000 && <p>Você esta gastando muito</p>}
    </div>
  );
};

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const Exercicio2 = () => {
  return (
    <div>
      {produtos
        .filter((el) => Number(el.preco.replace("R$ ",'')) > 1500)
        .map(({ id, nome, preco, cores }) => {
          return (
            <div key={id}>
              <h1>{nome}</h1>
              <p>{preco}</p>
              <ul>
                {cores.map((cor) => {
                  return (
                      <li key={cor} style={{ color: 'white', backgroundColor:cor }}>{cor}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Exercicio1 dados={luana} />
      <br />
      <Exercicio1 dados={mario} />
      <br />
      <Exercicio2 />
      <br />
      <Eventos />
    </>
  );
};

export default App;
