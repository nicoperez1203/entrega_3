const url = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json"

async function traer_datos(url){
let promise = await fetch(url);
let array = await promise.json();

let contenido = "";
for (let index = 0; index < array.length; index++){
let punt = array[index].score;
let descr = array[index].description;
let nombuser = array[index].user;
let fecha = array[index].dateTime;


contenido += `<a><img src="img/user.png">${nombuser}</a> <h6>"${descr}"</h6>  <p>${punt} Estrellas</p> <p>Fecha y hora del comentario: ${fecha}</p><hr>`

}

document.getElementById("comentarios").innerHTML = contenido;
}

traer_datos(url);







