const noticias = [
{
titulo: "Paraná + Sustentável",
texto: "Nova plataforma reúne dados ambientais e produtivos para apoiar agricultores."
},
{
titulo: "Show Rural Coopavel 2026",
texto: "Evento destacou inovação, sustentabilidade e agricultura familiar."
},
{
titulo: "Bioinsumos ganham destaque",
texto: "Encontro de Agroecologia reforçou a importância dos bioinsumos para uma agricultura mais sustentável."
},
{
titulo: "Safra Paranaense em Crescimento",
texto: "Boletins agrícolas apontam crescimento da produção com foco em eficiência e sustentabilidade."
}
];

function carregarNoticias(){

const container = document.getElementById("news-container");

container.innerHTML = "";

noticias.forEach(noticia => {

const div = document.createElement("div");

div.classList.add("news");

div.innerHTML = `
<h3>${noticia.titulo}</h3>
<p>${noticia.texto}</p>
`;

container.appendChild(div);

});

}

window.onload = carregarNoticias;
