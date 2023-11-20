import React from "react";
import { useState } from "react";


export default () => {

    const [cliente, setCliente] = useState({
        nome: '',
        sobrenome: '',
        cidade: '',
        email: ''
    })

    return (
        <>
            <h3>Exercicio 07</h3>
            <ul>
                <li>Nome: {cliente.nome}</li>
                <li>Sobrenome: {cliente.sobrenome}</li>
                <li>Cidade: {cliente.cidade}</li>
                <li>Email: {cliente.email}</li>
            </ul>

            <hr />
            <button onClick={() => {
                const c = { ...cliente }
                c.nome = 'Diego'
                setCliente(c)
            }
            }>Nome</button>
            <button onClick={() => {
                const c = { ...cliente }
                c.sobrenome = 'Gularte'
                setCliente(c)
            }}>Sobrenome</button>
            <button onClick={() => {
                const c = { ...cliente }
                c.cidade = 'Porto Alegre'
                setCliente(c)
            }}>Cidade</button>
            <button onClick={() => {
                const c = { ...cliente }
                c.email = 'diego@gmail.com'
                setCliente(c)
            }}>Email</button>
        </>
    )
}
