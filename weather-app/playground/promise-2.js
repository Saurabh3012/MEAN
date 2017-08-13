
const request = require("request")


var geocodeAddress = (address) => {
	return new Promise((resolve, reject)=>{

	var add = encodeURIComponent(address)

	request({
			url: `http://maps.googleapis.com/maps/api/geocode/json?address=${add}`,
			json: true
		}, (err, res, body) => {


			if(err){
				reject("Unable to connect to Google")
			}else if(body.status === 'ZERO_RESULTS'){
				reject("Unable to find adress")
			}else if( body.status === 'OK'  ){
				resolve({
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				})
				
			}
		}
		)		

	})
}


geocodeAddress("gdsfkjgfd").then((res)=>{
	console.log(res.address)
}, (err) =>{
	console.log(err)
})