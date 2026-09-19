
const listaDeProdutos = [
    {
     nome: "café", preco: 12.50, distancia: 600
    },
    {
     nome: "café", preco: 9.50, distancia: 2000
    },
    {
     nome: "café", preco: 16.50, distancia: 200
    }
]
function produtos(app) {
    app.innerHTML = `
    <label for="input-busca"></label>
        <input 
            type="text" 
            id="input-busca" 
            placeholder="Produto ou marca"
            aria-label="campo busca de produto"
        >
    <div>
    <h1>Página produtos</h1>
    ${
        listaDeProdutos.map(item=> `Nome: ${item.nome} Preço:${item.preco } Distância:${item.distancia} ` ).join('<br>')
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