import './produtos.css'
import listaDeProdutos from '../../dadosMockados/dados.js'

function produtos(app) {
    app.innerHTML = `
    <div>
    <h1>Página produtos</h1>
    ${
        listaDeProdutos.map((produto)=>{
            return `<div class="produto">
                        <div class="produto-imagem>
                            <img src="${produto.img}" alt="A imagem de um produto" class="imagem-produto">
                            <h3>${produto.nome}</h3>
                        </div>
                        <div class="preco-distancia">
                            <p class="preco-especial">R$ ${produto.preco}</p>
                            <p> ${produto.distancia}</p>
                        </div>
                    </div>`
    })
    }
    </div>`
    window.location.hash = "#produtos"
}

export default { 
    url: "#produtos",
    label: "",
    icon: "shopping-basket",
    pagina: produtos
 };