// TITEL
const titel = document.querySelector("h1");
console.log(titel);

titel.textContent = "En anden titel";

// 1-Artikel: overskrift
const article1 = document.querySelector("section article h3");
console.log(article1);

article1.textContent = "En anden artikel-titel";

// 1-Artikel: brødtekst
const p1 = document.querySelector("section article p");
console.log(p1);

p1.textContent = "Ny brødtekst";

// Artikel overskrift 2
const article2 = document.querySelector("section:nth-child(2)");
console.log(article2);

article2.textContent = "Ny ny ny";

// 2 Brødtekst

// const h3_2 = document.querySelector("article:nth-child(1)");

// const article1 = document.querySelector("article:nth-child(1)");
// const img1 = document.querySelector("article:nth-child(1) img");
// const article1Heading = document.querySelector("article:nth-child(1) h3");
// const article1Content = document.querySelector("article:nth-child(1) p");
