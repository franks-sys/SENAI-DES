const modalCli = document.getElementById("#modalCli")

var clientes


function abrirModal(){
    modalCli.style.display="block";
}

function fecharModal(){
    modalCli.style.display="none";
}

const formCLi = document.querySelector("#formCli");
formCLi.addEventListener("submit", e => {
    e.preventDefault();
    const obj = {

        cpf : formCLi.cpf.value,
        nome: formCLi.nome.value,
        sobrenome: formCLi.sobrenome.value,
        nascimento: formCLi.nascimento.vallue 
    }

    clientes.push(obj);

})

function renderizarTabela(){
    const corpo = document
}