import { useState } from 'react';
import './styles.scss';



export function Home() {


    const [numero, setNumero] = useState()

    const [stack, setStack] = useState([])

    function adicionarNaFila() {
        const number = Number(numero)
        setStack(stack => [...stack, number])
        console.log(stack)

    }

    function removerDaFila() {
        console.log(stack)


        let fila = stack

        if (fila.length > 0) {
            fila.pop()
            console.log(fila)
        }
        else {
            alert("Fila ja esta vazia")
        }
    }



    return (

        <div className="container">

            {/* <ul>
                {stack.map((numbers) => <li key={numbers.toString()}>{numbers}</li>)}
            </ul> */}

            <input
                className="input"
                type="number"
                onChange={(e) => setNumero(e.target.value)}
            />

            <button type="button" className="button" onClick={adicionarNaFila}>
                Adicionar na pilha
            </button>

            <button type="button" className="button" onClick={removerDaFila}>
                Remover da pilha
            </button>
        </div>
    )
}