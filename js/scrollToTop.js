let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("active_scroll_button")
    } else {
        scrollToTopBtn.classList.remove("active_scroll_button")
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}