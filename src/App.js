import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    objetos: [
      {
        nome: "Igor",
        idade: 18,
        filmeFavorito: "Até o Último Homem",
        música: "Capitulo 4, Versículo 3 ",
        cor: "Preto"
      },
      {
        nome: "Camila",
        idade: 18,
        filmeFavorito: "Vingadores: Ultimato",
        música: "Mala Santa",
        cor: "Amarelo"
      },
      {
        nome: "Victor",
        idade: 12,
        filmeFavorito: "Carros 3",
        música: "Goosebumps",
        cor: "Branco"
      },
      {
        nome: "Kelvin",
        idade: 28,
        filmeFavorito: "O Menino do Pijama Listrado",
        música: "Rindo À Toa",
        cor: "Azul"
      },
      {
        nome: "Iury",
        idade: 23,
        filmeFavorito: "Logan",
        música: "A MAIOR SAUDADE",
        cor: "Vermelho"
      },
      {
        nome: "Italo",
        idade: 30,
        filmeFavorito: "Arremesando Alto",
        música: "Dias De Luta, Dias de Gloria",
        cor: "Roxa"
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.objetos.map((itens) => (
          <ul>
            <li>Meu nome é: {itens.nome}</li>
            <li>Minha idade é: {itens.idade}</li>
            <li>Meu filme favorito é: {itens.filmeFavorito}</li>
            <li>Minha música favorita é: {itens.música}</li>
            <li>Minha cor preferida é: {itens.cor}</li>
          </ul>
        ))}
      </>
    );
  }
}
