import React, { Component } from "react";
import CardNota from "./CardNota";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Estudos").map(
          (categorias, index) => {
            return (
              <li key={index}>
                <CardNota />
              </li>
            );
          }
        )}
      </ul>
    );
  }
}
