//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';



const SecondsCounter = (props) => {
    return (
        <div className="principal">
            <div className="reloj"> 
            <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="cuadro seis">
                {props.digitoSeis % 10}
            </div>
            <div className="cuadro cinco">
                {props.digitoCinco % 10}
            </div>
            <div className="cuadro cuatro">
                {props.digitoCuatro % 10}
            </div>
            <div className="cuadro tres">
                {props.digitoTres % 10}
            </div>
            <div className="cuadro dos">
                {props.digitoDos % 10}
            </div>
            <div className="cuadro uno">
                {props.digitoUno % 10}
            </div>
        </div>
    );
};

SecondsCounter.propTypes = {
    digitoUno:PropTypes.number,
    digitoDos:PropTypes.number,
    digitoTres:PropTypes.number,
    digitoCuatro:PropTypes.number,
    digitoCinco:PropTypes.number,
    digitoSeis:PropTypes.number
};

let contador = 0;
setInterval(function() {
    const seis = Math.floor(contador / 100000);
    const cinco = Math.floor(contador / 10000);
    const cuatro = Math.floor(contador / 1000);
    const tres = Math.floor(contador / 100);
    const dos = Math.floor(contador / 10);
    const uno = Math.floor(contador / 1);
    contador++;
    
    ReactDOM.render(<SecondsCounter digitoUno={uno} digitoDos={dos} digitoTres={tres} digitoCuatro={cuatro} digitoCinco={cinco} digitoSeis={seis} />, document.querySelector("#app"));
}, 1000);




