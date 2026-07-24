let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

document.addEventListener("DOMContentLoaded", () => {
    renderizarTabela();
});

function abrirModal(){
    document.getElementById("modal").style.display = "flex";
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
    limparCampos();
}

function salvarCliente(){
    const nome = document.getElementById("nome").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const local = document.getElementById("local").value.trim();
    const data = document.getElementById("data").value;

    if(nome === "" || descricao === ""){
        alert("Nome e Descrição são obrigatórios!");
        return;
    }

    const eventoExistente = eventos.find(evento => evento.nome === nome);
    if(eventoExistente){
        alert("Esse evento já está cadastrado!");
        return;
    }

    const novoevento = {
        id: Date.now(),
        nome,
        descricao,
        local,
        data,
        imagens: []   // inicia com galeria vazia
    };

    eventos.push(novoevento);
    atualizarLocalStorage();
    renderizarTabela();
    fecharModal();
}

function renderizarTabela(){
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    eventos.forEach(evento => {
        const linha = document.createElement("tr");
        linha.style.cursor = "pointer";

        // Clique na linha abre a página de detalhes
        linha.addEventListener("click", (e) => {
            // Evita navegar ao clicar no botão Excluir
            if(e.target.tagName === "BUTTON") return;
            window.location.href = `evento.html?id=${evento.id}`;
        });

        linha.innerHTML = `
            <td>${evento.nome}</td>
            <td>${evento.descricao}</td>
            <td>${evento.local || "—"}</td>
            <td>${formatarData(evento.data)}</td>
            <td>
                <button onclick="excluirCliente(${evento.id})">Excluir</button>
            </td>
        `;

        tabela.appendChild(linha);
    });
}

function excluirCliente(id){
    if(!confirm("Deseja excluir este evento?")) return;

    eventos = eventos.filter(evento => evento.id !== id);
    atualizarLocalStorage();
    renderizarTabela();
}

function atualizarLocalStorage(){
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

function limparCampos(){
    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("local").value = "";
    document.getElementById("data").value = "";
}

function formatarData(data){
    if(!data) return "—";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}