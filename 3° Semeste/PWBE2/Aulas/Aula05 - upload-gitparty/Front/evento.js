const params = new URLSearchParams(window.location.search);
const eventoId = Number(params.get("id"));

let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
let evento = eventos.find(e => e.id === eventoId);

if (evento && !evento.imagens) {
    evento.imagens = [];
    atualizarLocalStorage();
}

document.addEventListener("DOMContentLoaded", () => {
    if (!evento) {
        alert("Evento não encontrado!");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("detalhe-nome").textContent = evento.nome;
    document.getElementById("detalhe-descricao").textContent = evento.descricao;
    document.getElementById("detalhe-local").textContent = evento.local || "Não informado";
    document.getElementById("detalhe-data").textContent = formatarData(evento.data);

    renderizarGaleria();
});

function formatarData(data) {
    if (!data) return "Não informada";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}


function renderizarGaleria() {
    const galeria = document.getElementById("galeria");
    const aviso = document.getElementById("galeria-vazia");

    galeria.innerHTML = "";

    if (!evento.imagens || evento.imagens.length === 0) {
        galeria.appendChild(aviso);
        return;
    }

    evento.imagens.forEach((url, index) => {
        const item = document.createElement("div");
        item.classList.add("galeria-item");

        item.innerHTML = `
            <img src="${url}" alt="Imagem ${index + 1}" 
                 onclick="abrirVisualizacao('${url}')"
                 onerror="this.src='https://placehold.co/400x300/1a1c23/ff0404?text=Imagem+inválida'">
            <div class="galeria-item-actions">
                <button class="btn-remover-img" onclick="removerImagem(${index})">🗑 Remover</button>
            </div>
        `;

        galeria.appendChild(item);
    });
}


function abrirModalImagem() {
    document.getElementById("modal-imagem").style.display = "flex";
}

function fecharModalImagem() {
    document.getElementById("modal-imagem").style.display = "none";
    document.getElementById("url-imagem").value = "";
}

function adicionarImagem() {
    const url = document.getElementById("url-imagem").value.trim();

    if (url === "") {
        alert("Por favor, insira uma URL de imagem.");
        return;
    }

    evento.imagens.push(url);
    atualizarLocalStorage();
    renderizarGaleria();
    fecharModalImagem();
}

function removerImagem(index) {
    if (!confirm("Deseja remover esta imagem?")) return;

    evento.imagens.splice(index, 1);
    atualizarLocalStorage();
    renderizarGaleria();
}


function abrirVisualizacao(url) {
    document.getElementById("imagem-ampliada").src = url;
    document.getElementById("modal-visualizar").style.display = "flex";
}

function fecharVisualizacao() {
    document.getElementById("modal-visualizar").style.display = "none";
}


function atualizarLocalStorage() {
    const index = eventos.findIndex(e => e.id === eventoId);
    if (index !== -1) {
        eventos[index] = evento;
        localStorage.setItem("eventos", JSON.stringify(eventos));
    }
}