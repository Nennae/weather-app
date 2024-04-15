const key = 'K14xVSmEAdaPGKqNjJlRFMelrtnkltGH';

const getCity = async (city) => {

      const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
      const query = `?apikey=${key}&q=${city}`;

      const response = await fetch(baseUrl + query);
      const data = await response.json();

      return data[0];
}

getCity('stockholm')
.then(data => console.log(data))
.catch(error => console.log(error));