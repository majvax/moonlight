const hiddenElements = document.querySelectorAll('.hidden');
window.onload = function() {
    hiddenElements.forEach((element) => {
        element.classList.add("show");
    });
}