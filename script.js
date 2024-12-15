const menuBnt = document.getElementById("abreMenu");
const menuList = document.getElementById("menuList");
const cardapio = document.getElementById("cardapio")

menuBnt.addEventListener("click", () => {
    const currentDisplay = window.getComputedStyle(menuList).display;

    if (currentDisplay === "none") {
        menuList.style.display = "flex";
        //cardapio.style.display = "none";
    } else {
        menuList.style.display = "none";
        //cardapio.style.display = "block";
    }
});

function closeMenu() {
    menuList.style.display = "none";
    //cardapio.style.display = "block";
}