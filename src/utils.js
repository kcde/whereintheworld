const endpoint = 'https://restcountries.com/v2/all';

async function fetchCountries() {
  try {
    const response = await fetch(endpoint);
    const countries = await response.json();
    console.log(countries[0]);
    console.log('countries');

    return countries;
  } catch (err) {
    console.log(err);
  }
}

export { fetchCountries };
