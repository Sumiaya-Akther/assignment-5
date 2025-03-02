// page change

document.getElementById("another_page")
.addEventListener("click", function(){
    window.location.href="main.html"
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

const activeHistory = document.getElementById("activity-history");
const btnCompleted = document.querySelectorAll(".btn-completed");
let task = btnCompleted.length;
document.getElementById("taskA").innerText = task;
let navTask = 23;


 for (let i = 0; i < btnCompleted.length; i++) {
    const btn = btnCompleted[i];
    btn.addEventListener("click", function(event){
        if (task>0){
            task--;
            navTask++;

            document.getElementById("taskA").innerText = task;
            document.getElementById("nav-task").innerText = navTask;

            this.classList.add("pointer-events-n0ne", "opacity-50", "bg-gray-400");
            alert("Board updated Successfully");


            const newTime = new Date().toLocaleTimeString();
            let card = event.target.parentElement.parentElement;
            let title =card?card.querySelector(".title")?.innerText : "Unknown Task";

            const logMessage = document.createElement("p");
            logMessage.innerText = `You have Complete The Task ${title} at ${newTime}`;
            logMessage.classList.add("bg-[#f4f7ff]", "p-3", "rounded");

            activeHistory.appendChild(logMessage);

            if (task === 0) {
                setTimeout(() =>{
                    alert("congrates!!!You completed all the current task.");
                }, 500)
            }

        }
    })
    
 }

//  clear history button

document.getElementById("history-btn")
.addEventListener("click", function(){
  activeHistory.innerHTML = "";
});
   


