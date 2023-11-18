import React from 'react';
import { useState } from 'react';

export default () => {

    const [valor1, setValor1] = useState(1);
    const [valor2, setValor2] = useState(2);

    function dimunuir1() {
        setValor1(v => v - 1)
    }
    function aumentar1() {
        setValor1(v => v + 1)
    }
    function dimunuir2() {
        setValor2(v => v - 1)
    }
    function aumentar2() {
        setValor2(v => v + 1)
    }

    return (
        <>
            <h4>UseState 3</h4>
            <p>valor: {valor1}</p>
            <button onClick={dimunuir1}> - </button>
            <button onClick={aumentar1}> + </button>
            <hr />
            <p>valor: {valor2}</p>
            <button onClick={dimunuir2}> - </button>
            <button onClick={aumentar2}> + </button>
            <hr />
            <p>O Resultado de {valor1} x {valor2} = {valor1 * valor2}</p>
        </>
    )
}