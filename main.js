function showdropdown (content) {
    document.querySelector("dropdown-button").classList.toggle("hidden");
    document.querySelector(".dropdown-content").classList.toggle("hidden");
}

function hidedropdown (menu) {
    document.querySelector("dropdown-content").classList.toggle("hidden");
    document.querySelector(".dropdown-button").classList.toggle("hidden");
}

