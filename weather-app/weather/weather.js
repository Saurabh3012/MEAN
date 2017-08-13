const request = require("request")

var getWeather = (apiKey, lat, lng, callback) =>{

	request({
		url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
		json:true
	}, (err, res, body) => {

		if(err){
			callback("unable to connect to forecast servers");
		}else if( res.statusCode === 400 ){
			callback("bad request")
		}else if( res.statusCode === 200){
			callback(undefined, body.currently.temperature)
		}
	})

}

module.exports = {
	getWeather
}