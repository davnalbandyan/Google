"use strict"

let searchBar = document.querySelector(".searchBar .search");// input text
let btnX = document.querySelector('.searchBar .fa-x');  
let searchGoogle = document.getElementById("searchGoogle") //search button



searchBar.addEventListener("input", searchBarX);

function searchBarX() {
    
    let searchValue = searchBar.value.toLowerCase();
    
  
   
    if (searchValue) {
        btnX.style.display = "block";
    } else {
        btnX.style.display = "none";
    };
    document.addEventListener("keydown",(e)=>{
        if(e.key === "Enter"){
            location.href = "https://www.google.ru/search?q=" + searchValue;
            searchBar.value = " "
        }
    })
    
  
};

searchGoogle.addEventListener("click",()=>{
    location.href = "https://www.google.ru/search?q=" + searchBar.value;
    searchBar.value = null;
})
    




