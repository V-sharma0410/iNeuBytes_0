let button = document.getElementById("button")
const h1=document.querySelectorAll(".h1")

//finding Selected option
var text
const getOption=()=>{
    var e = document.querySelector(".offer-option");

    text = e.options[e.selectedIndex].text;
    console.log(text)
   
}

if(!text){
    text="Any"
}

//fetching joke
async function jokes(){
    let jokeData = await fetch(`https://v2.jokeapi.dev/joke/${text}?type=single`)
    
    jokeData=await jokeData.json()
    
    h1[0].innerHTML="<b>Category : </b>"+jokeData.category
    h1[1].innerHTML="<b>Joke : </b>" +jokeData.joke
    
}

button.addEventListener("click",jokes)