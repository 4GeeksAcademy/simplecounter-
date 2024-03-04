//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/Counter.jsx";
import "../styles/index.css";

let contador = 0;
setInterval(function() {
    const seis = Math.floor(contador / 100000);
    const cinco = Math.floor(contador / 10000);
    const cuatro = Math.floor(contador / 1000);
    const tres = Math.floor(contador / 100);
    const dos = Math.floor(contador / 10);
    const uno = Math.floor(contador / 1);
    contador++;
    
    ReactDOM.render(<Counter digitoUno={uno} digitoDos={dos} digitoTres={tres} digitoCuatro={cuatro} digitoCinco={cinco} digitoSeis={seis} />, document.querySelector("#app"));
}, 1000);




