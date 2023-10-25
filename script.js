//adicionado interação ao botão de tema escuro:
    dark = () => { 
    const dark = document.getElementById("corpo")
    dark.style.background = "#001a1a" 
    const caixa = document.getElementById("caixa")
    caixa.style.background = "#001a1a" 
}
// Adicionando evento a função dark:
document.getElementById("dark").addEventListener("click",dark)

//adicionado interação a função de tema claro:
clean = () => {
    const clean =  document.getElementById("corpo")
    clean.style.background = "#80ffd4"
    const caixa = document.getElementById("caixa")
    caixa.style.background = "#80ffd4"
}
// Adicionando evento a função clean:
document.getElementById("clean").addEventListener("click", clean)

//Interação de voltar ao tema normal da pag:
normal = () => {
   const normal = document.getElementById("corpo")
    normal.style.background = "white"
    const caixa = document.getElementById("caixa")
    caixa.style.background = "white"
}
// Adicionado evento a função normal:
document.getElementById("normal").addEventListener("click" , normal)


