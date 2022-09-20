const urlApi= "https://gedc07c6509dfcc-dbg5equipo1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/api/reto1"


function peticionGet() {
$.ajax({
    url: urlApi,
    type: 'GET',
    datatype:'json',
    success: function(data){
        console.log(data)
    },
    error: function(xhr,status){
        console.log("HA SUCEDIDO UN PROBLEMA AL CONUMIR LA API"+ xhr.status + " "+ status)
    },
    complete: function(xhr, status){
        console.log("peticion realizada con exito!")
    }
});
}

function peticionPost(Codprode, nomprode,preciode, inventariode) {

    $.ajax({
        url: urlApi,
        type: 'POST',
        datatype:'json',
        data:{
            codprod:Codprode,
            nomprod: nomprode,
            precio: preciode,
            inventario: inventariode
        },
        //success: function(data){
        //    console.log("REGISTRO GUARDADO CON EXITO")
            
        //},
        error: function(xhr,status){
          if(xhr.status == 555){
            console.log("registro exixte!!")
          } else if (xhr.status == 201){
            console.log("guardado registro con exito")
          }
        },
        complete: function(xhr, status){
            console.log("PETICION REALIZADA CON EXITO!")
        }
    });   

    
}
