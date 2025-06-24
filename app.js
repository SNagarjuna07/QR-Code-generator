let btn = document.querySelector("button");

let img = document.querySelector("img");

let input = document.querySelector("input");

btn.style.cursor = "not-allowed"; 

function QRCode() {
    const URL = document.getElementById("url").value;

    if(URL === "") {
        img.src = '';
        
        return;
    }

    const QR = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${URL}`;

    img.src = QR;
}

input.addEventListener("input", () => {
    if(input.value === '') {
          
        btn.disabled = true;
          
        btn.style.cursor = "not-allowed";
        
    } else {
        
        btn.disabled = false;
        
        btn.style.cursor = "pointer";
    }
})

btn.addEventListener("click", QRCode);