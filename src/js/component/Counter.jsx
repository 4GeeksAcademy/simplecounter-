import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';

const Counter = (props) => {
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

Counter.propTypes = {
    digitoUno:PropTypes.number,
    digitoDos:PropTypes.number,
    digitoTres:PropTypes.number,
    digitoCuatro:PropTypes.number,
    digitoCinco:PropTypes.number,
    digitoSeis:PropTypes.number
};

export default Counter;