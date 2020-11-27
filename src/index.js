import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//React é um framework javascript
// JSX - extensão do javascript, é uma sintaxe declarativa
//react -> lib
//React -> ecossistema 
//O React usa a div="root" no arquivo index.js, inserindo os elementos declarados em JSX do arquivo App.js
//Exatamente! O React utiliza esse arquivo index.js para inserir todo o conteúdo JSX do App.js no index.html, tornando possível que esse template seja exibido no navegador.
//Ele faz isso através de um método interno do ReactDOM chamado render() (que também utiliza JSX ao passar < App /> como parâmetro).