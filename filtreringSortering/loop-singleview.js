const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const key = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

let data;
let filter = "alle";
const header = document.querySelector("header h1");

document
  .querySelectorAll("button")
  .forEach((knap) => knap.addEventListener("click", filtrerPersoner));

function filtrerPersoner() {
  filter = this.dataset.troende;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  console.log(filter);
  vis();
  header.textContent = this.textContent;
}

async function hentData() {
  const response = await fetch(url, key);
  const json = await response.json();
  data = json;
  // console.log("PERSONER", personer);
  vis();
}

function vis() {
  //   console.log(personer);
  const holder = document.querySelector("#holder");
  const skabelon = document.querySelector("template").content;
  holder.textContent = "";
  data.forEach((person) => {
    if (filter == "alle" || filter == person.troende) {
      const klon = skabelon.cloneNode(true);
      klon.querySelector(".billede").src = "billeder/" + person.billede;
      klon.querySelector(".navn").textContent =
        person.fornavn + " " + person.efternavn;
      klon.querySelector("article").addEventListener("click", () => {
        visPerson(person._id);
      });

      // klon
      //   .querySelector("article")
      //   .addEventListener("click", () => visPerson(person));
      // klon.querySelector("img").src = "billeder/" + person.billede;
      // klon.querySelector("h2").textContent =
      //   person.fornavn + " " + person.efternavn;
      // klon.querySelector("p").textContent = person.email;
      // const dato = person.fødselsdag;
      // klon.querySelector("p+p").textContent =
      //   "Født: " + person.fødselsdag.slice(0, 10);
      holder.appendChild(klon);
    }
  });
}

function visPerson(id) {
  console.log(id);
  location.href = "singleview.html?id=" + id;
}

hentData();
