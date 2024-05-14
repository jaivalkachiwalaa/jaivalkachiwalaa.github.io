function clock() {
    window.rt = 1000; r = 0;
    document.getElementById('footerDate').textContent = new Date().toLocaleDateString(); // today
    var m = setInterval(function () {
        if (r > 84600) { clearInterval(m); }
        r++;
        document.getElementById('footerTime').textContent = new Date().toLocaleTimeString(); // clock
    }, window.rt);
}

function copy() {
    navigator.clipboard.writeText("bc1qn052gj0h70rjrcfyqtkmxqzpzztw6f5ln9jdts");
    copyButton.innerHTML=("Copied!!!");
    setTimeout(revertcopied, 3000);
}

function revertcopied() {
    copyButton.innerHTML=("COPY TO CLIPBOARD");
}
