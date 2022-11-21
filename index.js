const btn = document.getElementById('btn-enviar');

function enviarInfo() {
    const titulo = document.getElementById('titulo').value;
    const url = document.getElementById('url').value;
    const parrafo = document.getElementById('parrafo').value;
    const tarjetas = document.getElementById('tarjetas');
    var tarjeta = document.createElement("div");
    tarjeta.innerHTML += `<p>Titulo: ${titulo}</p>`;
    tarjeta.innerHTML += `<p>URL Imagen: ${url}</p>`;
    tarjeta.innerHTML += `<p>Parrafo: ${parrafo}</p>`;

    //Creamos un boton por cada tarjeta con el texto
    let button = crearButton('Ocultar Tarjetas', 'btn-danger');
    //Escuchar evento al hacer click en el boton ocultar tarjetas
    button.addEventListener('click', ocultarTarjetas);

    //metemos el boton dentro del div de cada tarjeta
    tarjeta.appendChild(button);
    //creamos un separador para dividir las tarjetas
    var separador = document.createElement('hr');

    //Agregamos la tarjeta
    tarjetas.appendChild(tarjeta);
    //Agregamos el separador
    tarjetas.appendChild(separador);
}

btn.addEventListener('click', enviarInfo);

function crearButton(texto, tipoBoton){
    var button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add(tipoBoton);
    button.classList.add('mb-3');
    button.innerText = texto;
    return button;
}

function ocultarTarjetas() {
    //Leemos el div de tarjetas
    const tarjetas = document.getElementById('tarjetas');
    //Ocultamos todas las tarjetas
    tarjetas.hidden = true;

    const verTarjetas = document.getElementById('vertarjetas');
    verTarjetas.hidden = false;
    let button = '';
    if(!document.getElementById('button-ver-tarjeta')){
        button = crearButton('Ver Tarjetas', 'btn-primary');
        button.id = 'button-ver-tarjeta';
        verTarjetas.appendChild(button);
    }else{
        button =document.getElementById('button-ver-tarjeta');

    }

    button.addEventListener('click', verTarjetasClick);
}

function verTarjetasClick() {
     //Leemos el div de tarjetas
     const tarjetas = document.getElementById('tarjetas');
    //Ocultamos todas las tarjetas
    tarjetas.hidden = false;
    const verTarjetas = document.getElementById('vertarjetas');
    verTarjetas.hidden = true;
}

