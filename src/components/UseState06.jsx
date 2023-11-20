import React from "react";
import { useState } from "react";

import UseState06a from "./UseState06a";

export default () => {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

    function adiciona() {
        setValor1(v => v + 5)
    }
    function decres() {
        setValor1(v => v - 5)
    }

    function adiciona() {
        setValor2(v => v + 10)
    }
    function decres() {
        setValor2(v => v - 5)
    }

    return (
        <>
            <h1>valores: {valor1} + {valor2} = {valor1 + valor2}</h1>
            <UseState06a />
            <UseState06a />
        </>
    )
}
