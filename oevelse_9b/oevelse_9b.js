//Sørg for scriptet tester, om DOM'en er loadet, inden der bliver ændret på indholdet
document.addEventListener("DOMContentLoaded", start);

// Har sat denne variabel herop, for at funktionen skiftBillede kunne bruge img1
const img1 = document.querySelector("article:nth-child(1) img");
const img2 = document.querySelector("article:nth-child(2) img");

function start() {
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

  img1.src = "https://placeimg.com/640/480/tech";
  img1.alt = "Ny alt-tekst";

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
  console.log(img2);

  img2.src = "https://placeimg.com/640/480/tech";
  img2.alt = "Ny alt-tekst";

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

  // 1) Opret et nyt article-element med (createElement)
  let newArticle = document.createElement("article");
  let mainSection = document.querySelector("section");

  // 2) Tilføj et billede, overskrift og tekst til den nye artikel

  let billede = document.createElement("img");
  billede.src = "https://placeimg.com/640/480/people";
  newArticle.appendChild(billede);

  // Her oprettes et h3 element og tekst
  let overskrift = document.createElement("h3");
  let overskriftText = document.createTextNode("Article 3");

  // Her indsættes teksten i overskriften (h3)
  overskrift.appendChild(overskriftText);

  // Her tilføjes den nye overskrift til den nye artikel
  newArticle.appendChild(overskrift);

  // Brødtekst
  let indhold = document.createElement("p");
  let indholdTekst = document.createTextNode(
    "Her er noget nyt indhold den nye artikel."
  );

  indhold.appendChild(indholdTekst);
  newArticle.appendChild(indhold);

  // 3) Indsæt det nye element efter de eksiterende artikel element (appendChild)

  // appendChild betyder tilføj et ekstra barn til denne section/element
  mainSection.appendChild(newArticle);

  img1.addEventListener("click", skiftBillede);
}

function skiftBillede() {
  console.log(this);
  let tal = Math.round(Math.random() * 10);
  img1.src = "https://placeimg.com/640/480/arch?t=" + tal;
}

// Lav et array og tilføj en eventlistener, som kalder funktionen skiftBillede2
const kategorier = ["animals", "arch", "people", "nature", "tech"];
img2.addEventListener("click", skiftBillede2);

// Lav en funktion så den vælger en tilfældig kategori fra arrayet, og skifter både src og alt
function skiftBillede2() {
  console.log(this);
  const nummer = Math.round(Math.random() * 4);
  img2.src = "https://placeimg.com/640/480/" + kategorier[nummer];
  img2.alt = kategorier[nummer];
}
