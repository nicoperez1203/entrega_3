function mostrarNomb(){
    var nombre = document.getElementById("usuariolog");
    var userName = JSON.parse(sessionStorage.user);
    nombre.innerHTML = `Bienvenido <font color="palegreen"><strong>${userName.usuario}</strong></font> a e-mercado`;
}

mostrarNomb()