let mainText = document.querySelector('');

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value > 580) {
        mainText.style.animation="dllback 8s ease-out forwards";
    } else {
        mainText.style.animation=`dll 4s ease-out`;
    }
});