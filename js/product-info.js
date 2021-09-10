function mostrarNomb() {
    var nombre = document.getElementById("usuariolog");
    var userName = JSON.parse(sessionStorage.user);
    nombre.innerHTML = `Bienvenido <font color="Olive"><strong>${userName.usuario}</strong></font> a e-mercado`;
}

mostrarNomb()


var veichulo = {};

function mostrarInfoAuto(autos) {

    let imagenesVehiculo = "";

    for (let i = 0; i < autos.length; i++) {
        let imageSrc = autos[i];

        imagenesVehiculo += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="Onix">
            </div>
        </div>
        `

        document.getElementById("imgVehi").innerHTML = imagenesVehiculo;
    }
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {

        if (resultObj.status === "ok") {
            let veichulo = resultObj.data;

            let nombAuto = document.getElementById("nombAuto");
            let descAuto = document.getElementById("descAuto");
            let vendAuto = document.getElementById("vendAuto");
            let costAuto = document.getElementById("costAuto");
            let cateAuto = document.getElementById("cateAuto");


            nombAuto.innerHTML = veichulo.name;
            descAuto.innerHTML = veichulo.description;
            vendAuto.innerHTML = veichulo.soldCount;
            costAuto.innerHTML = veichulo.currency + veichulo.cost;
            cateAuto.innerHTML = veichulo.category;



            mostrarInfoAuto(veichulo.images);
        }



    });
});



var prodRel = [];
function mostrarProdRel(prodRel){
    
    let listRelacionados = "";
    for (let i = 0; i < prodRel.length; i++){
        let rePro = prodRel[i];
        {
            listRelacionados += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + rePro.imgSrc + `" alt="Onix">
            </div>
        </div>
        `
        }

        document.getElementById("productosRelacionados").innerHTML = listRelacionados;
    }

}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {

        if (resultObj.status === "ok") {
            

            let relatedProducts = resultObj.data;
            mostrarProdRel(relatedProducts);

        }
    });
});






var comentarios = [];

function mostrarComentarios(comentarios) {

    let listaComentarios = "";
    for (let i = 0; i < comentarios.length; i++) {
        let coment = comentarios[i];

        {
            listaComentarios += `
                    
                   
                    <div>
                    <h5><img src="img/user.png" width="45" height="25"><font color="Olive"><strong>`+ coment.user + `</font></strong></img></h5> 
                    <br>
                        <div>
                        <i> "`+ coment.description + `" </i>
                        </div>
                        <div>
                            <p>` + coment.score + ` Estrellas</p>
                             <div>
                              <small class="text-muted">Fecha y hora del comentario: ` + coment.dateTime + ` </small>
                             </div>
                        </div>
                    </div>
                    <hr>
                
                `
        }

        document.getElementById("listaComentarios").innerHTML = listaComentarios;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {

            let comentario = resultObj.data;
            mostrarComentarios(comentario);
        }
    });
});













