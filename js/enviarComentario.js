
//DESAFIATE ENTREGA 3



function enviarComentario(){
    var description = document.getElementById("newComentario").value;
    var hoy = new Date();
    var fecha = hoy.getDate() + `-` + (hoy.getMonth()+1) + `-` + hoy.getFullYear();
    var hora = hoy.getHours() + `:` + hoy.getMinutes() + `:` + hoy.getSeconds();
    var user = JSON.parse(sessionStorage.getItem("user"));
    
    var stars = document.getElementById("puntuacion").value;
         if (stars == 1) {
            estrellas = `<span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>`
            } else if (stars == 2) {
            estrellas = `<span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>`

            }
            else if (stars == 3) {
            estrellas = `<span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>
                         <span class="fa fa-star"></span>`

            } else if (stars == 4) {
            estrellas = `<span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star"></span>`

            } else if (stars == 5) {
            estrellas = `<span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>
                         <span class="fa fa-star checked"></span>`

                 }
   
   

    var insertComment =`<div><h5><img src="img/user.png" width="45" height="25"><font color="Olive"><strong> ` + user.usuario + `</font></strong></img></h5></div>
                        <br>  <div>"<i>` + description + `</i>"</div><br> Puntuaci??n:`
                        + estrellas +`<br><small class="text-muted">Fecha y hora del comentario:` + fecha + ` ` + hora + `</small><hr>`;
    
    
    if (document.getElementById("newComentario").value == ""){
        alert("La caja de comentarios no puede estar vac??a")
    }else{
    var cajaComentarios = document.createElement("div");
    document.getElementById("listaComentarios").appendChild(cajaComentarios);
    cajaComentarios.innerHTML += insertComment;
    document.getElementById("newComentario").value = "";
}

    
}