
const userBtn = document.querySelector(".userBtn");
const adminBtn = document.querySelector(".adminBtn");
const moveBtn = document.querySelector(".moveBtn");
const managerBtn = document.querySelector(".managerBtn");
const user = document.querySelector(".user");
const admin = document.querySelector(".admin");
const manager = document.querySelector(".manager");

adminBtn.addEventListener('click',()=>{
    moveBtn.classList.add("rigthBtn");
    moveBtn.classList.remove("rigthBtn2");    
    admin.classList.add("adminForm");
    user.classList.remove("userForm");
    manager.classList.remove("managerForm");
    moveBtn.innerHTML="Admin";
});
userBtn.addEventListener('click',()=>{
    moveBtn.classList.remove("rigthBtn");
    moveBtn.classList.remove("rigthBtn2");    
    admin.classList.remove("adminForm");
    user.classList.add("userForm");
    manager.classList.remove("managerForm");
    moveBtn.innerHTML="User";
});
managerBtn.addEventListener('click',()=>{
    moveBtn.classList.add("rigthBtn2");
    moveBtn.classList.remove("rigthBtn");
    admin.classList.remove("adminForm");
    manager.classList.add("managerForm");
    moveBtn.innerHTML="Manager";
});