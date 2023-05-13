var menu = document.querySelector('nav .nav-list');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function() {

    if (iconMenu.getAttribute("src") == 'img/menu.png') {
        iconMenu.setAttribute("src", "img/close.png");
    } else {
        menuBar.classList.toggle('rotate');
        setTimeout(() => {
            
            iconMenu.setAttribute("src", "img/menu.png");
        }, 500)
    }
    menu.classList.toggle('active');
    menuBar.classList.toggle('down')
   
});

// Obtém a referência para a imagem
let imagem = document.querySelector('.box img');

// Array com os caminhos das imagens
let slide = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg', 'img/slide4.jpg', 'img/slide5.jpg'];

// Índice inicial
let indice = 0;

// Função para alterar o src da imagem
function alterarSrc() {
    imagem.classList.add('imagem-transition');

    imagem.setAttribute('src', slide[indice]);

    setTimeout(function() {
        imagem.classList.remove('imagem-transition');
      }, 100);
}

// Chama a função para exibir a primeira imagem
alterarSrc();

// Obtém as referências para os botões
let botaoAnterior = document.getElementById('btn-anterior');
let botaoProximo = document.getElementById('btn-proximo');

// Event listener para o botão anterior
botaoAnterior.addEventListener('click', function() {
  indice = (indice - 1 + slide.length) % slide.length;
  alterarSrc();
});

// Event listener para o botão próximo
botaoProximo.addEventListener('click', function() {
  indice = (indice + 1) % slide.length;
  alterarSrc();
});

// Função para alternar automaticamente as imagens com o tempo
function alternarAutomaticamente() {
    
    imagem.classList.add('imagem-transition');

    indice = (indice + 1) % slide.length;
    alterarSrc();
    
    setTimeout(function() {
        imagem.classList.remove('imagem-transition');
      }, 400);
  }
  
  // Define o intervalo para alterar automaticamente a cada 2 segundos
  setInterval(alternarAutomaticamente, 5000);