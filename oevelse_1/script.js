// Konstante variabler (DRY: Dont Repeat Yourself)
const alkohol1 = document.querySelector("#snaps");
const alkohol2 = document.querySelector("#oel");
const fri1 = document.querySelector("#sodavand");
const fri2 = document.querySelector("#cola");

fri1.addEventListener("click", klikDrik);
fri2.addEventListener("click", klikDrik);
alkohol1.addEventListener("click", klikDrik);
alkohol2.addEventListener("click", klikDrik);

function klikDrik() {
  console.log(this);
  if (this == alkohol1 || this == alkohol2) {
    console.log("Indeholder alkohol");
  } else {
    console.log("Alkoholfri");
  }
}

// "This" refererer til alle de eventlistenere, der er tilkoblet funktionen. Altså: fri1, fri2, alkohol1, alkohol2
// || Betyder eller, altså at if else funktionen har flere betingelser, der kan opfyldes for at den "indeholder alkohol"
