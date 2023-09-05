let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'

let imagem = document.querySelector('#foto')
imagem.setAttribute('scr', 'pride-fc.jpg')
imagem.setAttribute('width', '280px')

titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solied red";
titulo.style.padding = "0.625rem"
titulo.style.borderRadius ="5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute("class", 'escura')