const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const key = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

async function hentData() {
  const response = await fetch(url, key);
  const personer = await response.json();
  //   console.log("PERSONER", personer);
  vis(personer);
}

function vis(personer) {
  //   console.log(personer);
  const holder = document.querySelector("#holder");
  const skabelon = document.querySelector("template").content;
  personer.forEach((person) => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector("img").src = "billeder/" + person.billede;
    klon.querySelector("img").alt = person.fornavn;
    klon.querySelector(".navn").textContent = person.fornavn;
    klon.querySelector(".titel").textContent = person.titel;
    klon.querySelector(".fødselsdag").textContent =
      "Født: " + person.fødselsdag.slice(0, 10);
    holder.appendChild(klon);
  });
}

hentData();
