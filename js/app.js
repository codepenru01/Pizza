let InOnion = document.querySelector(".onion__btn");
let InPotatoes = document.querySelector(".potatoes__btn");
let InMeat = document.querySelector(".meat__btn");
let InTomato = document.querySelector(".tomato__btn");

let OneImg = document.querySelector(".onion__img");
let TwoImg = document.querySelector(".potatoes__img");
let ThreeImg = document.querySelector(".meat__img");
let FourImg = document.querySelector(".tomato__img");

let BtnOne = document.querySelector(".dollor__one");
let BtnTwo = document.querySelector(".dollor__two");
let BtnThree = document.querySelector(".dollor__three");
let OnionBtn = document.querySelector(".onion__btn-one");

let PitsawImg = document.querySelector(".pitsaw__images");
let Heading = document.querySelector(".pitsaw__heading");

InPotatoes.addEventListener("click", function() {
    OneImg.style.display = "none";
    TwoImg.style.display = "block";
    ThreeImg.style.display = "none";
    FourImg.style.display = "none";
});

InOnion.addEventListener("click", function() {
    OneImg.style.display = "block";
    TwoImg.style.display = "none";
    ThreeImg.style.display = "none";
    FourImg.style.display = "none";
});

InMeat.addEventListener("click", function() {
    OneImg.style.display = "none";
    TwoImg.style.display = "none";
    ThreeImg.style.display = "block";
    FourImg.style.display = "none";
});

TwoImg.addEventListener("click", function() {
    TwoImg.style.display = "block";
    ThreeImg.style.display = "none";
    FourImg.style.display = "none";
});

InTomato.addEventListener("click", function() {
    OneImg.style.display = "none";
    TwoImg.style.display = "none";
    ThreeImg.style.display = "none";
    FourImg.style.display = "block";
});

BtnOne.addEventListener("click", function() {
    OnionBtn.innerHTML = `${BtnOne.innerHTML}`;
});

BtnTwo.addEventListener("click", function() {
    OnionBtn.innerHTML = `${BtnTwo.innerHTML}`;
});

BtnThree.addEventListener("click", function() {
    OnionBtn.innerHTML = `${BtnThree.innerHTML}`;
});

OneImg.addEventListener("click", function() {
    PitsawImg.innerHTML = `${OneImg.innerHTML}`;
    PitsawImg.style.backgroundColor = "#8E5A7E";
    PitsawImg.style.padding = "80px";
    PitsawImg.style.borderRadius = "50%";
    PitsawImg.style.border = "5px solid black";
});

InOnion.addEventListener("click", function() {
    Heading.innerHTML = `${InOnion.innerHTML}`;
    Heading.style.textAlign = "center";
});

InPotatoes.addEventListener("click", function() {
    Heading.innerHTML = `${InPotatoes.innerHTML}`;
    Heading.style.textAlign = "center";
});

TwoImg.addEventListener("click", function() {
    PitsawImg.innerHTML = `${TwoImg.innerHTML}`;
    PitsawImg.style.backgroundColor = "yellow";
    PitsawImg.style.padding = "80px";
    PitsawImg.style.borderRadius = "50%";
    PitsawImg.style.border = "5px solid black";
});

InMeat.addEventListener("click", function() {
    Heading.innerHTML = `${InMeat.innerHTML}`;
    Heading.style.textAlign = "center";
});

ThreeImg.addEventListener("click", function() {
    PitsawImg.innerHTML = `${ThreeImg.innerHTML}`;
    PitsawImg.style.backgroundColor = "brown";
    PitsawImg.style.padding = "80px";
    PitsawImg.style.borderRadius = "50%";
    PitsawImg.style.border = "5px solid black";
});

InTomato.addEventListener("click", function() {
    Heading.innerHTML = `${InTomato.innerHTML}`;
    Heading.style.textAlign = "center";
});

FourImg.addEventListener("click", function() {
    PitsawImg.innerHTML = `${FourImg.innerHTML}`;
    PitsawImg.style.backgroundColor = "red";
    PitsawImg.style.padding = "80px";
    PitsawImg.style.borderRadius = "50%";
    PitsawImg.style.border = "5px solid black";
});