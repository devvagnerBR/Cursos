import { Fragment, useState } from "react";

const Exercicio1 = () => {

    const [nome, setNome] = useState("")

    const luana = {
        cliente: 'Luana',
        idade: 27,
        compras: [
            { nome: 'Notebook', preco: 'R$ 2500' },
            { nome: 'Geladeira', preco: 'R$ 3000' },
            { nome: 'Smartphone', preco: 'R$ 1500' },
        ],
        ativa: true,
    };

    const mario = {
        cliente: 'Mario',
        idade: 31,
        compras: [
            { nome: 'Notebook', preco: 'R$ 2500' },
            { nome: 'Geladeira', preco: 'R$ 3000' },
            { nome: 'Smartphone', preco: 'R$ 1500' },
            { nome: 'Guitarra', preco: 'R$ 3500' },
        ],
        ativa: false,
    };

    const Mario = () => {
        setNome(mario)
    }
    const Luana = () => {
        setNome(luana)
    }
    



    const green = {
        color: "green",

    }


    
    const red = {
        color: "red",
    }



    let pessoa = nome

    const total = pessoa.compras && pessoa.compras.map((item) => Number(item.preco.replace("R$ ", ""))).reduce((a, b) => a + b)

    return (
        <Fragment>
            <div>
                <p> Nome: {pessoa.cliente} </p>
                <p>Idade: {pessoa.idade} anos</p>
                <p>
                    Situação: <span style={pessoa.ativa ? green : red}>{pessoa.ativa ? 'Ativa' : 'Inativa'}</span>

                </p>
                <p>Total gasto: R${total} </p>
                <p></p>

                <button onClick={Mario}>Mario</button>
                <button onClick={Luana}>Luana</button>
                {total > 10000 && <p>Você está gastando muito!</p>}
            </div>
        </Fragment>
    )
}

export default Exercicio1