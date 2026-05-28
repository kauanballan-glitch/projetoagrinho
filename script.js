function mostrarMensagem(){

  const mensagem = document.getElementById("mensagem");

  if(mensagem.style.display === "block"){
    mensagem.style.display = "none";
  } else {
    mensagem.style.display = "block";
  }

}
