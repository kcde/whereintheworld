const endpoint = 'https://restcountries.com/v3/';

async function fetchCountries() {
  try {
    const response = await fetch(endpoint + 'all');
    const countries = await response.json();
    console.log(countries[0]);

    return countries;
  } catch (err) {
    console.log(err);
  }
}

async function fetchCountry(countryCode) {
  const countryEndpoint = endpoint + 'alpha/' + countryCode;

  try {
    const response = await fetch(countryEndpoint);
    const country = await response.json();
    console.log(country);
    return country;
  } catch (err) {
    console.log(err);
  }
}

fetchCountry('aut');

function debounce(callbck, time = 500) {
  //init timer
  let timer;

  //return function
  return (...args) => {
    //clear timeout if ther is timer
    clearTimeout(timer);
    //set a new timer
    const context = this;
    timer = setTimeout(() => {
      //call function on timeout
      callbck.apply(context, args);
    }, time);
  };
}

export { fetchCountries, debounce };
