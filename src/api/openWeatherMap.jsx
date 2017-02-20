import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=40c67c36643b5a155ad02c52da1a0f55&units=imperial';
//40c67c36643b5a155ad02c52da1a0f55
export default { 
	getTemp(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);
		}); 
	}
}