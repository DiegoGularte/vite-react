import React from 'react';
import { useState } from 'react';
export default (props) => {

    const [valor, setValor] = useState(0);

    function decrementar(valor) {
        setValor(v => v - valor)
    }

    function incrementar(valor) {
        setValor(v => v + valor)
    }

    return (
        <>
            <button onClick={() => decrementar(props.valor)}> - </button>
            <h3>Valor: <strong>{valor}</strong></h3>
            <button onClick={() => incrementar(props.valor)}> + </button>

        </>
    )
}