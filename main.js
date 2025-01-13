const input = document.getElementById("input-form")
const button = document.getElementById("button-form")
const ListaDeTarefas = document.getElementById("ul-tarefas")



let arrayDeTarefas = []

function  mostrarNaTela() {
   let novaLista = ""

    arrayDeTarefas.forEach(tarefa => {
        novaLista = novaLista + `
        <li  id="li-tarefas" >
             <input id="input-tarefas" type="checkbox">${tarefa}</input>
        </li>
        `
    })

    ListaDeTarefas.innerHTML = novaLista

    
}



function clickButton() {
    arrayDeTarefas.unshift(input.value)
    mostrarNaTela()
    
    event.preventDefault()

   
    
}



button.addEventListener("click", clickButton)

