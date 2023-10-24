//adicionado interação ao botão de tema escuro:
document.getElementById("dark").onclick = dark = () =>{
    const dark = document.getElementById("corpo")
    dark.style.background = "#001a1a" 
}

//adicionado interação ao botão de tema claro:
document.getElementById("clean").onclick = () => {
    const clean = document.getElementById("corpo")
    clean.style.background = "#b3ffff"
}

//Interação de voltar ao tema normal da pag:
document.getElementById("normal").onclick = noraml = () => {
    const normal = document.getElementById("corpo")
    normal.style.background = "white"
}
