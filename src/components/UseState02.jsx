import React from 'react';
import { useState } from 'react';

export default () => {

    const [valor, setValor] = useState(1)
    let diminuirValor = 1;
    function diminuir() {
        setValor(v => v - 1)
    }

    function aumentar() {
        setValor(v => v + 1)
    }

    function diminuir_valor(a) {
        setValor(v => v - a)
    }

    return (
        <>
            <h4>useState 2</h4>
            <p> Valor:  {valor}</p>
            <button onClick={diminuir}>diminuir</button>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={() => diminuir_valor(10)} >diminuir 10</button>

        </>
    )
}