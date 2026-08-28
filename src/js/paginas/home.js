function home(app) {
    app.innerHTML = `
    <div>
        <h1>Página inicial</h1>
    </div>
    `
}

export default {
    url: "#home",
    label: "Inicio",
    pagina: home
}