const loadCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
                .then(res => res.json())
                .then(data => displayCountries(data))
}

loadCountries()

const countriesContainer = document.getElementById('countries');
const displayCountries = (countries) => {
        countries.forEach((country) => {
                // console.log(country);
                const div = document.createElement('div');
                div.classList.add('country')
                div.innerHTML = `
                        <h3>${country.name}</h3>
                        <p>Capital: ${country.capital}</p>
                         <br/>
                        <button onclick="countryDetails('${country.name}')" type="button" class="btn btn-danger mt-3">See Flag</button>

                `;
                countriesContainer.appendChild(div);
        })
}

// Country Detail with Dynamical Button
const countryDetails = name => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
                .then(res => res.json())
                .then(data => displayCountryDetails(data[0]))
}

// Display Country Flag
const displayCountryDetails = country => {
        console.log(country);
        const countryDetails = document.getElementById('country-detail');
        const div = document.createElement('div');
        div.innerHTML = `
                <img class="img-fluid" style="width:300px" src=${country.flag} alt=""/>
                <h3>${country.name}</h3>
        `
        countryDetails.innerText = ''
        countryDetails.appendChild(div);

}