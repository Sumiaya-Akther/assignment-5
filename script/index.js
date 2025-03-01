// page change

document.getElementById("another_page")
.addEventListener("click", function(){
    window.location.href="./main.html"
});

// random bg color

document.getElementById("change-bg")
.addEventListener("click", function(){
    let randomBg = "#" + Math.floor(Math.random()*16777215)
    .toString(16);
    document.body.style.backgroundColor = randomBg;
});


// dynamic date

document.getElementById("date").innerText = new Date().toDateString();


// card section

let navTask = 22;
const btnCompleted = document.querySelectorAll(".btn-completed");
let task = btnCompleted.length;
document.getElementById("taskA").innerText = task;

 for (let i = 0; i < btnCompleted.length; i++) {
    const btn = btnCompleted[i];
    btn.addEventListener("click", function(){
        if (task>0){
            task--;
            navTask++;

            document.getElementById("taskA").innerText = task;
            document.getElementById("nav-task").innerText = navTask;
        }
    })
    
 }
   


