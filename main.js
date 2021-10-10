console.log("estou a funcionar");

// Apagar títulos (batota)
// for(let i=0; i < 6; i++){
//     document.querySelectorAll('h2')[i].innerHTML = "";
// }

// Desligar visibilidade dos títulos css
// for (let i = 0; i < 6; i++) {
//   document.querySelectorAll("h2")[i].style.visibility = "hidden";
// }

// Remover títulos da página
let titulos = document.querySelectorAll("h2");
for (let i = 0; i < titulos.length; i++) {
  titulos[i].remove();
}

// Adicionar link ao menu
let myMenuItem = document.createElement("a");

let target = document.querySelector("header > nav");

target.appendChild(myMenuItem);

// Dar um nome ao link
myMenuItem.innerHTML = "FBAUP";

// Definir url
myMenuItem.href = "https://sigarra.up.pt/fbaup/pt/web_page.inicial";

// Alterar CSS
// Acrescentar margem à esquerda do link
myMenuItem.style.marginLeft = "1em";

// Adicionar botão para alterar cor do fundo (igual a adicionar link ao menu)
let btn = document.createElement("button");

let target2 = document.querySelector("header");

target2.appendChild(btn);

btn.innerHTML = "Change background color";

btn.style.marginTop = "1em";
btn.style.fontSize = "20px";
btn.style.padding = "0.3em";

// Mudar a cor do fundo com click
btn.onclick = function changeColor() {
  document.body.style.backgroundColor = "blue";
  document.querySelector("header").style.backgroundColor = "lightGray";
};

// Mudar tamanho da fonte do h1
document.querySelector("h1").style.fontSize = "80px";
