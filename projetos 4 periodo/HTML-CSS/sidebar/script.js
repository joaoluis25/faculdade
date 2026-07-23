const sidebar = document.getElementById("sidebar");

const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const openSidebarBtn = document.getElementById("openSidebarBtn");

closeSidebarBtn.addEventListener("click", function () {
    sidebar.style.right = "-250px";
});

openSidebarBtn.addEventListener("click", function () {
    sidebar.style.right = "0px";
});