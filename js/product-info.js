function mostrarNomb() {
    var nombre = document.getElementById("usuariolog");
    var userName = JSON.parse(sessionStorage.getItem("user"));
    nombre.innerHTML = `Bienvenido <font color="Olive"><strong>${userName.usuario}</strong></font> a e-mercado`;
}

mostrarNomb()


/*-----------------INFORMACION-----------------------*/


var vehiculo = {}
var comentarios = [];




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
    getJSONData(PRODUCT_INFO_URL).then(function (info) {

        if (info.status === "ok") {
            vehiculo = info.data;

            let nombAuto = document.getElementById("nombAuto");
            let descAuto = document.getElementById("descAuto");
            let vendAuto = document.getElementById("vendAuto");
            let costAuto = document.getElementById("costAuto");
            let cateAuto = document.getElementById("cateAuto");


            nombAuto.innerHTML = vehiculo.name;
            descAuto.innerHTML = vehiculo.description;
            vendAuto.innerHTML = vehiculo.soldCount;
            costAuto.innerHTML = vehiculo.currency + vehiculo.cost;
            cateAuto.innerHTML = vehiculo.category;


            mostrarInfoAuto(vehiculo.images);



        }
    });
});

    
    
        
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {

            if (resultObj.status === "ok") {



                relacionados = resultObj.data;
                mostrarProdRel(relacionados);




            }

        

    });
});





function mostrarProdRel(array) { 

    let listRelacionados = "";

    for (let i = 0; i < vehiculo.relatedProducts.length; i++) {
        let rePro = array[vehiculo.relatedProducts[i]];


        listRelacionados += `
        <div class="col-lg-3 col-md-4">
        <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + rePro.imgSrc + `" alt=" ` + rePro.name + `">
                <a href="products.html"> ` + rePro.name + `</a>
            </div>
        </div>
        `


        document.getElementById("productosRelacionados").innerHTML = listRelacionados;
    }

}





/*---------------------COMENTARIOS-------------------*/


function mostrarComentarios(comentarios) {

    let listaComentarios = "";
    for (let i = 0; i < comentarios.length; i++) {
        let coment = comentarios[i];
        let estrellas = "";

        if (coment.score == 1) {
            estrellas = `<span class="fa fa-star checked"></span>
                             <span class="fa fa-star"></span>
                             <span class="fa fa-star"></span>
                             <span class="fa fa-star"></span>
                             <span class="fa fa-star"></span>`
        } else if (coment.score == 2) {
            estrellas = `<span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star"></span>
                             <span class="fa fa-star"></span>
                             <span class="fa fa-star"></span>`

        }
        else if (coment.score == 3) {
            estrellas = `<span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star"></span>
                             <span class="fa fa-star"></span>`

        } else if (coment.score == 4) {
            estrellas = `<span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star"></span>`

        } else if (coment.score == 5) {
            estrellas = `<span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>
                             <span class="fa fa-star checked"></span>`

        }
        {

            listaComentarios += `
                    
                   
                    <div>
                    <h5><img src="img/user.png" width="45" height="25"><font color="Olive"><strong>`+ coment.user + `</font></strong></img></h5> 
                    <br>
                        <div>
                        <i> "`+ coment.description + `" </i>
                        </div>
                        <div>
                            <p>Puntuación: ` + estrellas + ` </p>
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
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (coments) {
        if (coments.status === "ok") {

            let comentario = coments.data;
            mostrarComentarios(comentario);
        }
    });
});













