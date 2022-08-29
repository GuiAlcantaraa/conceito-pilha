
import './styles.scss';


export function Home() {

    var pilha = []


    function adicionarNaPilha() {

        if (pilha.length < 5) {

            const numeroAleatorio = Math.floor(Math.random() * 50 + 1)
            pilha.push(numeroAleatorio)
            console.log(pilha)

        }
        else {
            alert("Overflow: A pilha esta cheia")
        }

    }

    function removerDaPilha() {

        if (pilha.length > 0) {
            pilha.pop()
            console.log(pilha)
        }
        else {
            alert("Underflow: A pilha ja esta vazia")
        }
    }

    function listarPilha() {
        console.log("A pilha esta assim:", pilha)
    }

    function maiorMenorMediaPilha() {

        if (pilha.length > 0) {

            const maiorValor = pilha.reduce(function (prev, current) {
                return prev > current ? prev : current;
            });

            const menorValor = pilha.reduce(function (prev, current) {
                return prev < current ? prev : current;
            });

            const media = mediaPilha()

            console.log("O maior elemento da pilha", maiorValor)
            console.log("O menor elemento da pilha", menorValor)
            console.log("A media da pilha é:", media)
        }
        else {
            alert("Não existe nenhum elemento na pilha")
        }

    }

    function mediaPilha() {
        let i = 0, sum = 0, arrayLen = pilha.length

        while (i < arrayLen) {
            sum = sum + pilha[i++]
        }

        return sum / arrayLen;
    }

    function verificarParentese(){
        let open = 0
        let parentese = "(("

        for(var i = 0; i < parentese.length; i++){
            if(parentese[i] === "("){
                open++;
            }
            else {
                open --;
            }
        }
        if(open == 0){
            return true
        }
        else{
            return false;
        }
    }
    
    console.log(verificarParentese() ? "Certo" : "Errado")
    return (

        <div className="container">

            <button type="button" className="button" onClick={adicionarNaPilha}>
                Adicionar na pilha
            </button>

            <button type="button" className="button" onClick={removerDaPilha}>
                Remover da pilha
            </button>

            <button type="button" className="button" onClick={listarPilha}>
                Listar pilha
            </button>

            <button type="button" className="button" onClick={maiorMenorMediaPilha}>
                Maior, menor e media
            </button>
        </div>
    )
}