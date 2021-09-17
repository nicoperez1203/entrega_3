function enviarComentario(){
    var newComent = document.getElementById("newComentario").value;
    var hoy = new Date();
    var fecha = hoy.getDate() + `-` + (hoy.getMonth()+1) + `-` + hoy.getFullYear();
    var hora = hoy.getHours() + `:` + hoy.getMinutes() + `:` + hoy.getSeconds();
    var userName = sessionStorage.user;
    var insertComment = userName + `:  "<i>` + newComent + `</i>" <br> <small class="text-muted">Fecha y hora del comentario:` + fecha + ` ` + hora + `</small><hr>`;
    
    var cajaComentarios = document.createElement("p");
    document.getElementById("listaComentarios").appendChild(cajaComentarios);
    cajaComentarios.innerHTML += insertComment;
    document.getElementById("newComentario").value = "";

    
}