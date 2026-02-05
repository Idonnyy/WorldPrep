//access the elements in the html page
const greetingText = document.getElementById("greeting");
const greetBtnWidget = document.getElementById("changeBtn");

//Creates a listener for the button element
greetBtnWidget.addEventListener("click",function() {
    greetingText.text = "You clicked the button!!!"
});

