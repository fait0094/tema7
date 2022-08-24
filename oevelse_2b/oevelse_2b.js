// TITEL
const titel = document.querySelector("h1");
titel.textContent;
console.log(titel.textContent);

titel.textContent = "Ny titel";
console.log(titel.textContent);

// ARTIKEL 1
const article1 = document.querySelector("article:nth-child(1)");
console.log(article1);

// img
const img1 = document.querySelector("article:nth-child(1) img");
console.log(img1);

// heading
const article1Heading = document.querySelector("article:nth-child(1) h3");
console.log(article1Heading);

article1Heading.textContent;
console.log(article1Heading.textContent);

article1Heading.textContent = "Ny artikel-titel 1";
console.log(article1Heading.textContent);

// indhold
const article1Content = document.querySelector("article:nth-child(1) p");
console.log(article1Content);

article1Content.textContent;
console.log(article1Content.textContent);

article1Content.textContent =
  "Nyt indhold til første artikel. Her har jeg brugt textContent.";
console.log(article1Content.textContent);

// ARTIKEL 2
const article2 = document.querySelector("article:nth-child(2)");
console.log(article2);

// img
const img2 = document.querySelector("article:nth-child(2) img");
console.log(img2);

// heading
const article2Heading = document.querySelector("article:nth-child(2) h3");
console.log(article2Heading);

article2Heading.textContent;
console.log(article2Heading.textContent);

article2Heading.textContent = "Ny artikel-titel 2";
console.log(article2Heading.textContent);

// indhold
let article2Content = document.querySelector("article:nth-child(2) p");
console.log(article2Content);

article2Content.innerHTML;
console.log(article2Content.innerHTML);

article2Content.innerHTML =
  "<b>Nyt indhold til andet artikel med fed tekst. Her har jeg brugt innerHTML.</b>";
console.log(article2Content.textContent);
