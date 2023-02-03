 //Goal -> pull a Bible Verse with a searchbar
//render it on screen with JS DOM

//make HTML, CSS, and JS files
//connect (scaffold) our files together 

//find a decent API √
//make an API call with a url 


//set up our API call in JS 
//log our data 

//send it and render it through HTML

//make text input and search button 
//connect all together 

//style HTML with background (maybe scroll?) 
//

let button = document.querySelector("#searchButton")

async function getData(event) {
let textInput = document.querySelector("#inputBar").value
const url = `https://bible-api.com/john 3:16`


fetch(url)
.then(res => {
    return res.json()
})
.then(res => {
    console.log("success!", res)
})
.catch(err => {
    console.log("error!", err)
})
}

getData()