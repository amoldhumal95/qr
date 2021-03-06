console.log("server is running ...");
let qrGenerater = document.getElementById('generateBtnQR');
qrGenerater.addEventListener("click", function (e) {
    let size = document.getElementById('sizeQR').value;
    let data = document.getElementById('dataQR').value;
    let googleAPI = "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=";
    if (size === "" || size > 1600 || size < 75) {
        size = 100;
        alert("Oops! set to default.");
        document.getElementById('sizeQR').value = size;
        return size;
    }
    if (data === "") {
        return alert("enter data/url");
    }
    let newdata = data.replace(/\s+/g, ' ').trim();
    console.log(newdata);
    let finalUri = googleAPI + size + "x" + size + "&chl=" + newdata;
    console.log(finalUri);
    let qrElement = document.getElementById('qr');
    qrElement.src = finalUri;
});
let data = document.getElementById('dataQR');
data.addEventListener("keyup", function (e) {
    let msg = document.getElementById('msgBox');
    let len = document.getElementById('dataQR').value;
    msg.innerHTML = "Length of text is : " + len.length;
    if (len.length > 100) {
        document.getElementById('sizeQR').value = 100;
    }
    if (len.length > 149) {
        document.getElementById('sizeQR').value = 150;
    }
    if (len.length > 300) {
        document.getElementById('sizeQR').value = 200;
    }
    if (len.length > 600) {
        document.getElementById('sizeQR').value = 250;
    }
    if (len.length > 1100) {
        document.getElementById('sizeQR').value = 300;
    }
    if (len.length > 1250) {
        document.getElementById('sizeQR').value = 350;
    }
    if (len.length > 1400) {
        document.getElementById('sizeQR').value = 400;
    }
    if (len.length > 1500) {
        document.getElementById('sizeQR').value = 450;
    }
    if (len.length > 1800) {
        document.getElementById('sizeQR').value = 512;
    }
    if (len.length > 3000) {
        alert("Limit reached! Data will be lost!!!");
    }
});