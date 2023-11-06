window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    setTimeout(function () {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
        });
    }, 1000);
});