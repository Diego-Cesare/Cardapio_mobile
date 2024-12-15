const menuBnt = document.getElementById("abreMenu");
const menuList = document.getElementById("menuList");

menuBnt.addEventListener("click", () => {
    const currentDisplay = window.getComputedStyle(menuList).display;

    if (currentDisplay === "none") {
        menuList.style.display = "flex";
        setTimeout(() => {
            menuList.style.transition = "transform 0.5s ease";
            menuList.style.transform = "translateY(0)";
        }, 10);
    } else {
        menuList.style.transition = "transform 0.5s ease";
        menuList.style.transform = "translateY(-130px)";
        setTimeout(() => {
            menuList.style.display = "none";
        }, 500);
    }
});

function closeMenu() {
    menuList.style.display = "none";
}