document.getElementById("btnNoticias")
.addEventListener("click", () => {
    document.getElementById("noticias")
    .scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector(".lerMais")
.addEventListener("click", () => {
    alert(`
REPORTAGEM ESPECIAL

O Paraná vem consolidando sua posição como referência
em sustentabilidade agrícola por meio de investimentos
em energia renovável, preservação ambiental, biogás,
biometano e agricultura de precisão.

O crescimento das cooperativas e dos programas de
incentivo à inovação fortalece o desenvolvimento
econômico aliado à conservação dos recursos naturais.
`);
});

document.getElementById("newsletterForm")
.addEventListener("submit", function(e){
    e.preventDefault();

    alert(
        "Cadastro realizado com sucesso! Você receberá as próximas notícias."
    );

    this.reset();
});
