$(".deleteProduct").on("click",function(e){
    e.preventDefault();
    swal("¿Estás seguro de eliminar el producto?", {
        buttons: {
          cancel: "Cancelar!",
          defeat: "Aceptar",
        },
      })
      .then((value) => {
        switch (value) {
       
          case "defeat":
            swal("Excelente!", "Se ha eliminado el producto...", "success");
            break;
       
          case "cancel":
            break;
        }
      });
});

$(".deleteUser").on("click",function(e){
    e.preventDefault();
    swal("¿Estás seguro de eliminar el usuario?", {
        buttons: {
          cancel: "Cancelar!",
          defeat: "Aceptar",
        },
      })
      .then((value) => {
        switch (value) {
       
          case "defeat":
            swal("Excelente!", "Se ha eliminado el usuario...", "success");
            break;
       
          case "cancel":
            break;
        }
      });
});

