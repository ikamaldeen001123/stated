
const form = document.querySelector("form");

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ikamaldeen430@gmail.com",
        Password: "935AB7C11843B93574D75333ECC969CDBB67",
        To: 'ibrahimkamaldeenola@gmail.com',
        From: "ikamaldeen430@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});