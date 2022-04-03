function loadInfo() {
  fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => countryInfo(data))
    .catch(err => alert("sorry, data not found!"));
}
loadInfo();

function countryInfo(countries) {
  const countriesExp = document.getElementById("cname");
  // data.map((country) => {
  //   const { name, capital, flags } = country;
  countries.forEach((country) => {
    const { name, capital, flags } = country;
    const countryDiv = document.createElement("div");
    countryDiv.innerHTML = `
                    <div class="card-deck c-info">
                    <div class="card">
                      <img class="card-img-top" src="${flags.png}" width="100" alt="Card image cap">
                      <div class="card-body">
                        <h2>${name.common}</h2>
                        <p>${capital}</p>
                      </div>
                      <div class="card-footer">
                        <button onclick="loadFullName('${country.name.common}')" type="button" class="btn btn-success">Details</button>
                      </div>
                    </div>
                  </div>
                  `;
    countriesExp.appendChild(countryDiv);
  });
}

const loadFullName = name => {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => countryDetailInfo(data[0]))
    .catch(err => alert("sorry, data not found!"));
};

const countryDetailInfo = country => {
  const countryDetails = document.getElementById("details");
  countryDetails.innerHTML = `
    <div class="c-details">
      <div class="card-deck">
        <div class="card">
          <img
            class="card-img-top"
            src="${country.flags.svg}"
            alt="Card image cap">
          <div class="card-body">
            <h2>Country: ${country.name.common}</h2>
            <h3>Capital: ${country.capital}</h3>
            <p>Region: ${country.region}</p>
            <p>Subregion: ${country.subregion}</p>
            <p>Population: ${country.population}</p>
          </div>
        </div>
      </div>
    </div>
        `;
};
