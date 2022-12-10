const endpoint = 'https://restcountries.com/v3/all';

async function fetchCountries() {
  try {
    const response = await fetch(endpoint);
    const countries = await response.json();

    return countries;
  } catch (err) {
    console.log(err);
  }
}

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
