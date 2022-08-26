document.addEventListener("DOMContentLoaded", start);

let dyrarray = [
  {
    navn: "frø",
    type: "amfibie",
    levested: "vandhullet",
    billede: "http://mabe-kea.dk/E19/pics/frog.png",
  },
  {
    navn: "gris",
    type: "pattedyr",
    levested: "svinefarme",
    billede: "http://mabe-kea.dk/E19/pics/pig.png",
  },
  {
    navn: "ræv",
    type: "pattedyr",
    levested: "skoven",
    billede: "http://mabe-kea.dk/E19/pics/fox.png",
  },
  {
    navn: "sild",
    type: "fisk",
    levested: "havet",
    billede: "http://mabe-kea.dk/E19/pics/sild.png",
  },
  {
    navn: "krokodille",
    type: "krybdyr",
    levested: "floden",
    billede: "http://mabe-kea.dk/E19/pics/kroko.png",
  },
];

function start() {
  const listevisning = document.querySelector("#liste");
  dyrarray.forEach((animal) => {
    listevisning.innerHTML += `<p>${animal.navn}, ${animal.type} fra ${animal.levested}</p>`;
  });
}
