const contenedorQR = document.getElementById("cont-qr");

const formulario = document.getElementById("formulario");

const QR = new QRCode(contenedorQR);


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formulario.link.value);
});