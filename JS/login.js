function logar(event){
    event.preventDefault();
    const email = document.getElementById("txtEmail").value;
    const senha = document.getElementById("txtSenha").value;

    if (email == "pedrohenriquediad@gmail.com" && senha == "12") {
        alert(`aprovved`);
        window.location.href = "home.html";
    } else if(email == "" || senha == ""){
    } else {
        alert(`not aprovved`);
    }
}