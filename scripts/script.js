function clock() {
    window.rt = 1000; r = 0;
    document.getElementById('footerDate').textContent = new Date().toLocaleDateString(); // today
    var m = setInterval(function () {
        if (r > 84600) { clearInterval(m); }
        r++;
        document.getElementById('footerTime').textContent = new Date().toLocaleTimeString(); // clock
    }, window.rt);
};

function outlineCheck() {
    var checkBox = document.getElementById("outlineCheck");
    var outlineCss = document.querySelectorAll('*');

    if (checkBox.checked == true){
        outlineCss.style.outline = "2px solid rgbs(256, 0, 0, 0.3)";
      } 
    else {
        outlineCss.style.outline = "none";
      }
}