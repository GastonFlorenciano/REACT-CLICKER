import React from "react";
import "../css/Boton.css";

function Boton({ text, esSuma, accion }) {
    return (
        <button
            className={esSuma ? "suma" : "reset"}
            onClick={accion}>
            {text}
        </button>
    );
}

export default Boton;
