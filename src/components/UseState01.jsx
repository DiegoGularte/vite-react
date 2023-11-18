import React from 'react';
import { useState } from 'react';

export default () => {

    const [valor, setValor] = useState(1)

    function diminuir() {
        setValor(v => v - 1)
    }

    function aumentar() {
        setValor(v => v + 1)
    }

    return (
        <>
            <h4>useState</h4>
            <p> Valor:  {valor}</p>
            <button onClick={diminuir}>diminuir</button>
            <button onClick={aumentar}>aumentar</button>

        </>
    )
}