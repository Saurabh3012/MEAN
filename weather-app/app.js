const yargs = require("yargs")
const geocode = require("./geocode/geocode")
const weather = require("./weather/weather")

var API_KEY = "<enter your own>"


var argv = yargs
	.options({
		a:{
			demand: true,
			alias: "address",
			describe: "Address to fetch weather for",
			string: true
		}
	})
	.help()
	.alias("help","h")
	.argv;


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage){
		console.log(errorMessage)
	}else{
		// console.log(JSON.stringify(results, undefined, 2))
		console.log(results.address)
		weather.getWeather(API_KEY, results.latitude, results.longitude, (errorMessage, res) =>{
			if(errorMessage){
				console.log(errorMessage);
			}else{
				console.log(res);
			}
		})

	}
})

