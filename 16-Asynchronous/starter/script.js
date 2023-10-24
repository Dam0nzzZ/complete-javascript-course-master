'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

    request.send();
  
    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
  
      const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.continents}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
      </div>
    </article>
    `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    });
  };
  
  getCountryData('portugal');
  getCountryData('usa');
  getCountryData('germany');
*/
/////////////////////////////////////
const renderCountry = function (data, className = '') {
    const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.continents}</h4>
      <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};
// const request=fetch('https://restcountries.com/v3.1/name/usa')
// console.log(request);

// const getCountryData=function(country){
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
//     console.log(response);
//     return response.json();
//   }).then(function(data){
//     console.log(data);
//     for(let i=0;i<data.length;i++)
//     renderCountry(data[i]);
//   })
// }

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg}:${response.status}`);
        return response.json();
    }); //resolve-return promise;reject-throw error
};

const getCountryData = function (country) {
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`,
        'Country not found'
    )
        // .then(response => {
        //add error handler
        // console.log(response);
        // if (!response.ok)
        // throw new Error(`Country not found (${response.status})`);
        // return response.json();
        // })
        .then(data => {
            console.log(data);
            renderCountry(data[0]);
            const neighbor = data[0].borders[0];
            if (!neighbor) throw new Error('No neighbor found');
            return getJSON(
                `https://restcountries.com/v3.1/name/${neighbor}`,
                'Country not found'
            );
        }) //country 2 promise
        // .then(response => {
        //   if (!response.ok)
        //     throw new Error(`Country not found (${response.status})`);
        //   return response.json();
        // })
        .then(data => {
            console.log(data);
            renderCountry(data[0], 'neighbor');
        })
        .catch(err => {
            console.error(`ERROR:${err}`);
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

// btn.addEventListener('click', function () {
//   getCountryData('chaaaaa');
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const whereAmI = function (lat, lng) {
    fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=252935116914543590358x90146 `
    )
        .then(response => {
            console.log(response);
            if (!response.ok)
                throw new Error(`error status:${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(`you live in ${data.city},${data.country}`);
            return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
        })
        .then(resp => {
            console.log(resp);
            return resp.json();
        })
        .then(function (data) {
            console.log(data);
            renderCountry(data[0]);
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};
console.log(1);
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/*
// Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lotter draw is happening 🔮');
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You WIN 💰');
        } else {
            reject(new Error('You lost your money 💩'));
        }
    }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(1)
    .then(() => {
        console.log('1 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 second passed');
        return wait(1);
    })
    .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
*/
// navigator.geolocation.getCurrentPosition(
//     position => {
//         whereAmI(position.coords.latitude, position.coords.longitude);
//     },
//     err => console.error(err)
// );

const getPosition = function () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

// getPosition().then(resp => {
//     console.log(resp);
//     console.log(resp.coords.latitude, resp.coords.longitude);
//     whereAmI(resp.coords.latitude, resp.coords.longitude);
// });

//////////////////////////
//coding challenge #2
const imgContainer = document.querySelector('.image');
/*
const createImage = function (imgPath) {
    const newImg = document.createElement('img');
    newImg.src = imgPath;
    return new Promise(
        resolve => {
            newImg.addEventListener('load', () => {
                img.insertAdjacentElement('beforeend', newImg);
                resolve(newImg);
            });
        },
        reject => {
            throw new Error('error event');
            reject();
        }
    );
};
*/
const wait = function (seconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, seconds * 1000);
    });
};
//create image element
const createImg = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('img not found'));
        });
    });
};
let currentImg;

createImg('img/img-1.jpg').then(img => {
    currentImg = img;
    console.log('img1 loaded');
    return wait(2);
});
