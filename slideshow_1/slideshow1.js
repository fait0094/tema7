//opret array
let billeder = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.jpg",
  "img8.jpg",
];

// klik på knap for skifte billede
const knap = document.querySelector("button");
const billede = document.querySelector("img");

let antal = billeder.length - 1;
let nummer = 0;
console.log(antal);

knap.addEventListener("click", skiftBillede);

//opret funktion til at skifte billede
function skiftBillede() {
  if (nummer < antal) {
    nummer++;
    console.log(nummer);
  } else {
    nummer = 0;
    knap.textContent = "Videre";
  }
  if (nummer == antal) {
    knap.textContent = "Forfra";
  }
  billede.src = "billeder/" + billeder[nummer];
}
