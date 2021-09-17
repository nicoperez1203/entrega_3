
//DESAFIATE ENTREGA 3


function enviarComentario(){
    var description = document.getElementById("newComentario").value;
    var hoy = new Date();
    var fecha = hoy.getDate() + `-` + (hoy.getMonth()+1) + `-` + hoy.getFullYear();
    var hora = hoy.getHours() + `:` + hoy.getMinutes() + `:` + hoy.getSeconds();
    var user = JSON.parse(sessionStorage.getItem("user"));
    
    
    var insertComment =`<div><h5><img src="img/user.png" width="45" height="25"><font color="Olive"><strong> ` + user.usuario + `</font></strong></img></h5></div>
                        <br>  <div>"<i>` + description + `</i>"</div> <br> <small class="text-muted">Fecha y hora del comentario:` + fecha + ` ` + hora + `</small><hr>`;
    
    
    if (document.getElementById("newComentario").value == ""){
        alert("La caja de comentarios no puede estar vacía")
    }else{
    var cajaComentarios = document.createElement("div");
    document.getElementById("listaComentarios").appendChild(cajaComentarios);
    cajaComentarios.innerHTML += insertComment;
    document.getElementById("newComentario").value = "";
}

    
}