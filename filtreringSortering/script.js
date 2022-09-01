const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const key = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

document.addEventListener("DOMContentLoaded", start);
let personer;
let filter = "ja";

function start() {
  loadJSON();
}

async function loadJSON() {
  const response = await fetch(url, key);
  const personer = await response.json();
  console.log("PERSONER", personer);
  vis(personer);
}

function vis(personer) {
  //   console.log(personer);
  const holder = document.querySelector("#holder");
  const skabelon = document.querySelector("template").content;
  personer.forEach((person) => {
    // loop igennem json (personer)
    if (filter == person.troende) {
      const klon = skabelon.cloneNode(true);
      klon
        .querySelector("article")
        .addEventListener("click", () => visPerson(person));
      klon.querySelector(".navn").textContent =
        person.fornavn + " " + person.efternavn;
      klon.querySelector("img").src = "billeder/" + person.billede;
      holder.appendChild(klon);
    }
  });
}

// personData = parameter
function visPerson(personData) {
  console.log(personData);
}

loadJSON();
