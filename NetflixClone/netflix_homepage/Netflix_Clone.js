let navbar= document.getElementById("navbar")

const toggle = () =>{

    if(navbar.style.display == "none"){
       navbar.style.display = "block"
       navbar.style.textAlign = "left"
    }
    else{
        navbar.style.display = "none"
    }
}

let searchbar = document.getElementById("searchbox")

const searchBox = () =>{
  if(searchbox.style.display == "none"){
    searchbox.style.display = "block"
    search.style.display = "none"
  }
  else{
    searchbox.style.display = "none"
    search.style.display = "block"
  }
}