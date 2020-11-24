import React, { Component } from "react";
import CardNota from "./CardNota";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categorias) => {
          return (
            <li>
              <div>{categorias}</div>{" "}
              {/* chaves são utilizadas para usar variaveis */}
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
