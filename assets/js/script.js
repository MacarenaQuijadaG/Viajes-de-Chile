'session tooltip'
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

'session de doble click para que se muestre la alerta'
$(".enviar-mensaje").dblclick(function(){
    alert("Mensaje Enviado");
})
