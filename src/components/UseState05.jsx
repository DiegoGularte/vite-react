import React from "react";
import UseState05a from "./useState05a";
import { useState } from "react";

export default () => {
    const [valor, setValor] = useState(0)

    function atualizarValor() {
        setValor(1000)
    }

    return (
        <>
            <h2>UseState05</h2>
            <h1>Valor: {valor} </h1>
            <UseState05a funcao={atualizarValor} />

        </>
    )

}
