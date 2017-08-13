var asyncAdd = (a,b) => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if (typeof a === "number" && typeof b ==="number") {
				resolve(a+b);
			}else{
				reject("Args must be numbers")
			}
		}, 2000)
	})
}

asyncAdd(5,"7").then((res)=>{
	console.log(res)
	return asyncAdd(res, 33);
}).then((res)=>{
	console.log(res)
}).catch((err)=>{
	console.log(err)
})

// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(()=>{

// 		// resolve("It worked")
// 		reject("Unable to fulfill promise")

// 	}
// 		, 2000)
// })


// somePromise.then((message)=>{
// 	console.log("success",message)
// }, (errorMessage) =>{
// 	console.log("error: ", errorMessage)
// })