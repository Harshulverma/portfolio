document.getElementById("projects-link").addEventListener("click",function(e){
    e.preventDefault();

    document.getElementsByClassName("my-projects")[0].scrollIntoView({
        bheviour:"smooth"
    })
})
 
document.getElementById("about-link").addEventListener("click",function(e){
    e.preventDefault();

    document.getElementsByClassName("info-section")[0].scrollIntoView({
        bheviour:"smooth"
    })
})
document.getElementById("skills-link").addEventListener("click",function(e){
    e.preventDefault();

    document.getElementsByClassName("skills-section")[0].scrollIntoView({
        bheviour:"smooth"
    })
})

const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');

menu.addEventListener("click",function(){
    sidebar.classList.remove("close-sidebar")
    sidebar.classList.add("open-sidebar")
})

const close =document.querySelector('.close-icon');


close.addEventListener("click",function(){
    sidebar.classList.remove("open-sidebar")
    sidebar.classList.add("close-sidebar")
})


const sidebarLinks = document.querySelectorAll(".sidebar-link");

sidebarLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("data-target");
    const targetSection = document.getElementById(targetId)
    targetSection.scrollIntoView({ behavior: "smooth" });


    closeSidebar(); 
  });
});

function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("open-sidebar"); 
  }