var elForm = document.querySelector("#form_submit");
var elImgLinkInput = document.querySelector("#link_img");
var elNameProductInput = document.querySelector("#name_product");
var elProductPrizeInput = document.querySelector("#prize_product");
var elList = document.querySelector("#header_list");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    var inputTask = elImgLinkInput.value.trim();
    var inputName = elNameProductInput.value.trim();
    var inputPrize = Number(elProductPrizeInput.value.trim());

    elImgLinkInput.value = null;
    elNameProductInput.value = null;
    elProductPrizeInput.value = null;

    if (inputPrize <= 0){
        alert("Minimalniy bir kiritishingiz mumkin");
        console.log("Minimalniy bir kiritishingiz mumkin");
    }else if (isNaN(inputPrize)) {
        alert("Son kiriting");
        console.log("Son kiriting");
    }

    var newLi = document.createElement("li");
    newLi.setAttribute("class", "header__item")
    elList.appendChild(newLi);

    var newImg = document.createElement("img");
    newImg.textContent = inputTask;
    newImg.setAttribute("src", "./img/kartoshka.png");
    newImg.setAttribute("alt", "kartoshka");
    newImg.setAttribute("width", "380");
    newImg.setAttribute("height", "300");
    newLi.appendChild(newImg);

    var newHeading = document.createElement("h2");
    newHeading.textContent = inputName;
    newHeading.setAttribute("class", "header__heading")
    newLi.appendChild(newHeading);

    var newText = document.createElement("p");
    newText.textContent = inputPrize + " sum";
    newText.setAttribute("class", "header__text")
    newLi.appendChild(newText);


    var allInfo = {
        img:"",
        name: "",
        prize:""      
    } 

    allInfo.img = inputTask;
    allInfo.name = inputName;
    allInfo.prize = inputPrize;
    console.log(allInfo);
})

