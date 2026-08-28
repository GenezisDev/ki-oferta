function navbar( menu ) {
    const nav = document.getElementById("navbar")
    nav .innerHTML = `
    <nav>
        <ul class="menu-nav">
            ${
                menu.map(item => {
                    console.log(item)
                    return `<li>
                                <a href="${item.url}">${item.label}</a>
                            </li>`
                } 
                )
            }
        </ul>
    </nav>
    `
}

export { navbar }