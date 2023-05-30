function changeColor(linkId) {
    // Remover a classe "selected" de todos os links
    var links = document.getElementsByClassName("selected");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("selected");
    }

    // Adicionar a classe "selected" apenas para o link clicado
    var clickedLink = document.getElementById(linkId);
    clickedLink.classList.add("selected");
  }

  