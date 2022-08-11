const headerComponent = function () {
  return `
  <header>
    <h1 class="title">Best Beers</h1>
    <span class="material-icons menu-icon"> menu </span>
  </header>
  `;
};

const sectionComponent = function () {
  return `
  <section></section>
  `;
};

const beerCardComponent = function (name, company, type, id) {
  return `
        <div class="card">
          <div class="card--number">${id}</div>
          <h2 class="card--beer-name">${name}</h2>
          <h3 class="card--beer-company">${company}</h3>
          <h3 class="card--beer-type">${type}</h3>
          <button class="details-button">
            details
            <span class="material-icons arrow-icon"> arrow_forward </span>
          </button>
        </div>
      `;
};

const loadEvent = function () {
  const rootElement = document.getElementById("root");

  rootElement.insertAdjacentHTML("beforeend", headerComponent());
  rootElement.insertAdjacentHTML("beforeend", sectionComponent());

  const sectionElement = document.querySelector("section");

  // const array = [];
  // for (let index = 0; index < beers.cards.length; index++) {
  //   array.push(index + 1);
  // }

  // array.map((num) => beerCardComponent("", "", "", num));

  let index = 1;
  for (const beer of beers.cards) {
    sectionElement.insertAdjacentHTML(
      "beforeend",
      beerCardComponent(beer.title, beer.sub, beer.text, index)
    );
    index++;
  }
};

window.addEventListener("load", loadEvent);
