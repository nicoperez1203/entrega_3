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

            nombAuto.innerHTML = veichulo.name;
            descAuto.innerHTML = veichulo.description;
            vendAuto.innerHTML = veichulo.soldCount;
            costAuto.innerHTML = veichulo.currency + veichulo.cost;


            mostrarInfoAuto(veichulo.images);
        }
    });
});

var comentarios = {};

function mostrarComentarios(comentarios) {

    let listaComentarios = "";
    for (let i = 0; i < comentarios.length; i++) {
        let coment = comentarios[i];

        {
            listaComentarios += `
                
                    <div class="row">
                    <h4 class="mb-1">`+ coment.user + `</h4> 
                    <br>
                        <div class="col-3">
                            <p> `+ coment.description + ` </p>
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                
                                <small class="text-muted">Fecha y hora del comentario: ` + coment.dateTime + ` </small>
                            </div>
                            <p class="mb-1">` + coment.score + `</p>
                        </div>
                    </div>
                
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













