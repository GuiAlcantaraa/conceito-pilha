import { useState } from 'react';
import './styles.scss';



export function Home() {


    const [numero, setNumero] = useState()
    const [stack, setStack] = useState([1])

    function adicionarNaFila() {
        const number = Number(numero)
        const fila = [stack]
        console.log(fila)

        setStack(...fila, number)
        // const number = Number(numero)

        // fila.push(number)

        // setStack(...fila, fila)
    }

    function removerDaFila() {

        const fila = [stack]
        fila.pop()

        setStack(fila)

    }

    return (

        <div className="container">

            {/* <ul>
                {mapFila.map((numbers) => <li key={numbers.toString()}>{numbers}</li>)}
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