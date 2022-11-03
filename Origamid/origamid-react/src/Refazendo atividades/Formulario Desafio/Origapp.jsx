import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const Origapp = () => {
  //=============== estado para verificar qual elemento está ativo no momento   ===============
  const [slide, setSlide] = React.useState(0);

  //=============== estado para armazenar os resultados ===============
console.log(slide);
  const [resultado, setResultado] = React.useState(null);

  //=============== estado para armazenar ass respostas ===============
  const [respostas, setRespostas] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  //=============== função que lida com a atualização ===============
  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };
  //=============== função para verificar os resultados ================

  const ResultadoFinal = () => {
    console.log("final");
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);

  };



  //=============== função para trocar a pergunta ================
  const trocarPergunta = () => {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      ResultadoFinal();
    }
  };

  //=============== map para pegar os nomes das perguntas ================
  const listaDePerguntas = perguntas.map((pergunta, index) => {
    return (
      <Radio
        // se 1 for igual a 1 retorna o active retorna 'true'
        active={slide === index}
        key={pergunta.id}
        value={respostas[pergunta.id]}
        onChange={handleChange}
        {...pergunta}
      />
    );
  });

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {listaDePerguntas}
      {resultado ? (
        <h1
          style={{
            textAlign: "center",
            color: "greenyellow",
            border: "2px solid green",
            padding: "2rem",
          }}
        >
          {resultado}
        </h1>
      ) : (
        <>
          <button onClick={trocarPergunta}>Next</button>

        </>
      )}
    </form>
  );
};

export default Origapp;
