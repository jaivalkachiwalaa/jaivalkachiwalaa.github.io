function outlineCheck() {
    var checkBox = document.getElementById("outlineCheckbox");
    var outlineCss = document.querySelector("#outlineCss");

    if (checkBox.checked == true) {
        outlineCss.href = "styles/outline_y.css";
    }
    else {
        outlineCss.href = "styles/outline_n.css";
    }
}
