document.getElementById("another_page")
.addEventListener("click", function(){
    window.location.href="./main.html"
});

document.getElementById("change-bg")
.addEventListener("click", function(){
    let randomBg = "#" + Math.floor(Math.random()*16777215)
    .toString(16);
    document.body.style.backgroundColor = randomBg;
});