//Opret array
let billeder = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
];

// Klik på knap for at skifte billede
const knap = document.querySelector("button");
const billede = document.querySelector("img");

let number = 0;

knap.addEventListener("click", skiftBillede);

//Opret funktion til at skifte billede
function skiftBillede() {
  if (number <= 6) {
    number++;
  } else {
    number = 0;
    knap.textContent = "Videre";
  }
  billede.src = "billeder/" + billeder[number];
}

// Ved ikke om denne er korrekt udført. Har kigget på løsningen.
// Men det ser ud til man godt kan undlade noget kode? Skal man overhovedet bruge if-else-statement.
