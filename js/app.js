


function enableShowSideBar() {

    const hamburger = document.querySelector(".hamburger");
    const sidebarClodeButton = document.querySelector(".close-button");
    const sidebarContainer = document.querySelector(".sidebar-container");

    const openSidebar = () => {
        sidebarContainer.classList.add("show-sidebar");
    }
    const closeSidebar = () => {
        sidebarContainer.classList.remove("show-sidebar");
    }

    hamburger.addEventListener("click", openSidebar);
    sidebarClodeButton.addEventListener("click", closeSidebar);
}

enableShowSideBar();


function enableStickyNav() {
    const navbarConatiner = document.querySelector(".nav-container");

    window.addEventListener("scroll", function () {
        const scorllNumber = window.scrollY;
        const targetNumber = window.innerWidth >= 992 ? 70 : 50;
        if (scorllNumber > targetNumber) {
            navbarConatiner.classList.add("sticky-nav");
        } else {
            navbarConatiner.classList.remove("sticky-nav");
        }
    })
}

enableStickyNav();