const endpoint = 'https://restcountries.com/v3/';

async function fetchCountries() {
  try {
    const response = await fetch(endpoint + 'all');
    const countries = await response.json();
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

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

async function getCountryNameWithCode(code) {
  try {
    const data = await fetchCountry(code);
    return data[0].name.common;
  } catch (err) {
    console.log(err);
  }
}

export {
  fetchCountries,
  fetchCountry,
  debounce,
  formatNumber,
  getCountryNameWithCode,
};
