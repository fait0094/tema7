// document.addEventListener("DOMContentLoaded", start);

// function start() {
//   const listevisning = document.querySelector("#liste");
//   dyrarray.forEach((animal) => {
//     listevisning.innerHTML += `<p>${animal.navn}, ${animal.type} fra ${animal.levested}</p>`;
//   });
// }

document.addEventListener("DOMContentLoaded", visDyr);
let dyr = [
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

function visDyr() {
  const container = document.querySelector(".data-container");
  const dyrTemplate = document.querySelector("template");
  // const listevisning = document.querySelector("#liste");

  dyr.forEach((animal) => {
    let klon = dyrTemplate.cloneNode(true).textContent;
    klon.querySelector("h3").textContent = animal.navn;
    klon.querySelector("img").src = animal.billede;
    klon.querySelector(".p1").textContent = animal.type;
    klon.querySelector(".p2").textContent = animal.levested;
    container.appendChild(klon);
    // listevisning.innerHTML += ``;
  });
}

// const destination = document.querySelector("#liste");
// const type = `Type: ${dyr.type}`;
// const levested = `Levested: ${dyr.levested}`;
