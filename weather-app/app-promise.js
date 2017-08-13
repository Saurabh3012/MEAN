const yargs = require("yargs")
const axios = require("axios")

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

var encodedAddress = encodeURIComponent(argv.address)



var geocodeUrl = "http://maps.googleapis.com/maps/api/geocode/json?address="+encodedAddress

axios.get(geocodeUrl).then((response)=>{
	
	if (response.data.status === "ZERO_RESULTS") {
		throw new Error("Unable to find address");
	}

	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var apiKey = "<enter-your-own>";
	var weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
	console.log(response.data.results[0].formatted_address)

	return(axios.get(weatherUrl));
}).then((response)=>{
	var temp = response.data.currently.temperature;
	console.log(temp)
}).catch((e)=>{
	if(e.code === "ENOTFOUND"){
		console.log("not able to connect")	
	}else{
		console.log(e.message)
	}
	
})