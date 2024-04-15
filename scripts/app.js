const cityForm = document.querySelector('form');

const updateCity = async (city) => {

      const cityDetails = await getCity(city);
      const weatherDetails = await getWeather(cityDetails.Key);

      return {
            cityDetails: cityDetails,
            weatherDetails: weatherDetails
      }

};
cityForm.addEventListener('submit', e => {
      e.preventDefault();

      // get city value
      const city = cityForm.city.value.trim();
      cityForm.reset();

      // update the ui with the new city
      updateCity(city)
      .then(data => console.log(data))
      .catch(err => console.log(err))

      });