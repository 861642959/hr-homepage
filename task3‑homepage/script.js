// 导航栏滚动高亮简单示例
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{
    let current = "";
    sections.forEach(sec=>{
        const top = sec.offsetTop;
        if(window.scrollY >= top -100){
            current = sec.getAttribute("id");
        }
    })
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href").substring(1) === current){
            link.classList.add("active");
        }
    })
})