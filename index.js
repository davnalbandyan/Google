"use strict"

let searchBar = document.querySelector(".searchBar .search");// input text
let btnX = document.querySelector('.searchBar .fa-x');  
let searchGoogle = document.getElementById("searchGoogle") //search button
let keybord = document.querySelector('.fa-regular');


let google  = document.querySelector('.google ');


searchBar.addEventListener("input", searchBarX);
searchGoogle.addEventListener("click",search);

let glass = document.querySelector('.fa-magnifying-glass');
let sunny = document.querySelector(".darkAndlight .fa-sun");
let moon = document.querySelector(".darkAndlight .fa-moon");

sunny.addEventListener("click",()=>{
    google.style.background = "white";
    sunny.style.display = "none";
    moon.style.display = "block";
    searchBar.style.border = "5px solid black";
    searchBar.style.cssText = `background-color:white;color:black`;
});

moon.addEventListener("click",()=>{
    google.style.background = "#202124";
    moon.style.display = "none";
    sunny.style.cssText = `background:white, border-color:black`;
    searchBar.style.cssText = `background-color:202124;color:white`;

});


glass.addEventListener("click",()=>{
    let value = searchBar.value;
    if(value.trim().length > 0 ){
        search()
    }
});
/**
 * @"search that what user will search"
 */
function search(){
    location.href = "https://www.google.ru/search?q=" + searchBar.value;
    searchBar.value = " "

};

/**
 * "using the methods for add or remove the X, and use Enter to make search"
 * 
 */
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




let menuPoint = document.querySelector(".menupoints");


// menuPoint.addEventListener("click", show);

// function show() {
//     let newBorder = document.createElement("div");
//     newBorder.style.cssText = `
//         width: 150px;
//         height: 150px;
//         background-color: gray;
//         position:relative;
//         display:inline
        
//     `;
//     menuPoint.append(newBorder); // Append the newly created div to menuPoint
// }



