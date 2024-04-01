"use strict"

let searchBar = document.querySelector(".searchBar .search");// input text
let btnX = document.querySelector('.searchBar .fa-x');  
let searchGoogle = document.getElementById("searchGoogle") //search button
let keybord = document.querySelector('.fa-regular');


let google  = document.querySelector('.google ');


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
});


let glass = document.querySelector('.fa-magnifying-glass');

glass.addEventListener("click",()=>{
    location.href = "https://www.google.ru/search?q=" + searchBar.value;
    searchBar.value = null; 
})

let sunny = document.querySelector(".darkAndlight .fa-sun");
let moon = document.querySelector(".darkAndlight .fa-moon");

sunny.addEventListener("click",()=>{
    google.style.background = "white";
    sunny.style.display = "none";
    moon.style.display = "block";
    searchBar.style.border = "5px solid black";
    searchBar.style.cssText = `background-color:white;color:black`

    
    
});

moon.addEventListener("click",()=>{
    google.style.background = "#202124";
    moon.style.display = "none";
    sunny.style.cssText = `background:white, border-color:black`
    searchBar.style.cssText = `background-color:202124;color:white`

})



