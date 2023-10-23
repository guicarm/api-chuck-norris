import { useState } from "react";
import "./styles.css";

export default function App() {
  const [piadas, setPiadas] = useState(
    "Once a cobra bit Chuck Norris' leg. After five days of excruciating pain, the cobra died."
  );
  const [piadasFavoritas, setPiadasFavoritas] = useState([]);

  function obterPiada() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setPiadas(data.value);
      });
  }

  function adicionarFavoritos() {
    setPiadasFavoritas([...piadasFavoritas, piadas]);
  }

  function removerFavoritos(index) {
    const novaFavorites = [...piadasFavoritas];
    novaFavorites.splice(index, 1);
    setPiadasFavoritas(novaFavorites);
  }

  return (
    <div className="App">
      <h1>PIADAS SOBRE O CHUCK NORRIS</h1>
      <p> {piadas} </p>
      <button id="botoes" onClick={obterPiada}>
        {" "}
        Piada nova{" "}
      </button>
      <button id="botoes" onClick={adicionarFavoritos}>
        {" "}
        Adicionar as favoritas{" "}
      </button>
      <ul>
        {piadasFavoritas.map((favoritar, index) => (
          <li key={index}>
            {favoritar}{" "}
            <button id="botaoRemover" onClick={() => removerFavoritos(index)}>
              {" "}
              Remover piada{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
