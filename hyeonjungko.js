var modeBtn = document.querySelector("#screen-mode-text");

modeBtn.addEventListener("click", toggleMode);

function toggleMode() {
    var body = document.querySelector("body");
    var fontColor = window.getComputedStyle(body).color;
    var backgroundColor = window.getComputedStyle(body).backgroundColor;

    body.style.color = backgroundColor;
    body.style.backgroundColor = fontColor;

    if (modeBtn.textContent.includes("dark")) {
        modeBtn.textContent = "light mode";
    } else {
        modeBtn.textContent = "dark mode";
    }
}