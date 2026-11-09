// ==================================================
// APARTADO 4
// ==================================================

const listaIndice = document.querySelector('#lista_indice');

const encabezados = document.querySelectorAll(
    'main h2, main h3, main h4, main h5'
);

const listas = {
    H2: listaIndice
};

encabezados.forEach(function (encabezado) {

    const nivel = Number(encabezado.tagName.substring(1));

    const item = document.createElement('li');
    const enlace = document.createElement('a');

    enlace.href = `#${encabezado.id}`;
    enlace.textContent = encabezado.textContent;

    item.append(enlace);

    const listaPadre = listas['H' + nivel];

    if (listaPadre) {
        listaPadre.append(item);
    }

    const sublista = document.createElement('ul');
    item.append(sublista);

    listas['H' + (nivel + 1)] = sublista;

    //Elimina las listas sin elementos
    if (nivel === 5) {
        delete listas.H6;
    }
});

// ==================================================
// APARTADO 5
// ==================================================
const botonModo = document.querySelector('#btn_modo'); 
const cuerpoArt = document.querySelector('.Body'); 
const btnFuenteChica = document.querySelector('#btn_fuente_chica'); 
const btnFuenteMedia = document.querySelector('#btn_fuente_media'); 
const btnFuenteGrande = document.querySelector('#btn_fuente_grande'); 
const botonesFuente = document.querySelectorAll('.btn_fuente');

//MODO OSCURO
botonModo.addEventListener('click', function () { 
    document.body.classList.toggle('oscuro'); //Actualizamos texto según el estado
    if (document.body.classList.contains('oscuro')) { 
        botonModo.textContent = 'Modo claro';
    } 
    else { 
        botonModo.textContent = 'Modo oscuro';
    } }); 
    


//FUENTES 
function actualizarBotonFuente(botonActivo) { 
    botonesFuente.forEach(function (btn) { 
        btn.classList.remove('activo'); 
    }); 
    botonActivo.classList.add('activo'); 
} 
    
//Btn Pequeño 
btnFuenteChica.addEventListener('click', function () { 
    cuerpoArt.classList.remove('fuente_grande'); 
    cuerpoArt.classList.add('fuente_pequena'); 
    actualizarBotonFuente(btnFuenteChica);
}); 

//Btn Estándar
btnFuenteMedia.addEventListener('click', function () { 
    cuerpoArt.classList.remove('fuente_pequena', 'fuente_grande'); 
    actualizarBotonFuente(btnFuenteMedia); 
}); 

//Btn Grande 
btnFuenteGrande.addEventListener('click', function () { 
    cuerpoArt.classList.remove('fuente_pequena'); 
    cuerpoArt.classList.add('fuente_grande'); 
    actualizarBotonFuente(btnFuenteGrande); 
});



// ==================================================
// APARTADO 6: Secciones plegables
// ==================================================
const titulosSecc = document.querySelectorAll('.secc_art h2');

titulosSecc.forEach(function (titulo) {
    titulo.addEventListener('click', function () {
        const seccPadre = titulo.parentElement;
        seccPadre.classList.toggle('colapsada');
    });
});


// ==================================================
// APARTADO 7: Formulario de comentarios
// ==================================================

const formComentarios = document.querySelector('#form_comentarios');
const inputAutor = document.querySelector('#input_autor');
const inputComentario = document.querySelector('#input_comentario');
const contCara = document.querySelector('#contador_caracteres');
const msjError = document.querySelector('#msj_error');
const listaComentarios = document.querySelector('#lista_comentarios');

//Contador de caracteres
inputComentario.addEventListener('input', function () {
    const long = inputComentario.value.length;
    contCara.textContent = `${long} / 200 caracteres`;
    
    if (long > 200) {
        contCara.classList.add('limite_excedido');
    } else {
        contCara.classList.remove('limite_excedido');
    }
});

//Validación y publicación del comentario

formComentarios.addEventListener('submit', function (evento) {
    evento.preventDefault(); 
    
    //Limppiar errores previos 
    inputAutor.classList.remove('error'); 
    inputComentario.classList.remove('error'); 
    ocultarError(); 
    
    const nombre = inputAutor.value.trim(); 
    const textoComentario = inputComentario.value.trim(); 
    
    //Validar nombre 
    if (nombre === '') { 
        mostrarError('Por favor, ingrese su nombre.'); 
        inputAutor.classList.add('error'); 
        return; 
    } 
    
    //Validar comentario (min) 
    if (textoComentario.length < 10) { 
        mostrarError('El comentario debe tener al menos 10 caracteres.'); 
        inputComentario.classList.add('error'); 
        return; 
    } 
    //Validar comentario (max) 
    if (textoComentario.length > 200) { 
        mostrarError('El comentario no puede superar los 200 caracteres.'); 
        inputComentario.classList.add('error'); 
        return; 
    }

    ocultarError();

    //Fabricación dinámica de elementos
    const item = document.createElement('li');
    item.classList.add('item_comentario');

    const contTxt = document.createElement('div');
    contTxt.classList.add('cuerpo_comentario');

    const autorElemento = document.createElement('strong');
    autorElemento.textContent = nombre; // Seguro contra XSS

    const parrafoComentario = document.createElement('p');
    parrafoComentario.textContent = textoComentario; // Seguro contra XSS

    contTxt.append(autorElemento, parrafoComentario);

    //Botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.type = 'button';
    botonEliminar.classList.add('btn_eliminar');
    botonEliminar.textContent = 'Eliminar';

    item.append(contTxt, botonEliminar);
    listaComentarios.append(item);

    //Limpieza de campos y reinicio del contador
    formComentarios.reset();
    contCara.textContent = '0 / 200 caracteres';
    contCara.classList.remove('limite_excedido');
});

function mostrarError(texto) {
    msjError.textContent = texto;
    msjError.classList.remove('oculto');
}

function ocultarError() {
    msjError.textContent = '';
    msjError.classList.add('oculto');
}

//Eliminar comentarios dinámicos
listaComentarios.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('btn_eliminar')) {
        const elementoAEliminar = evento.target.parentElement;
        if (elementoAEliminar) {
            elementoAEliminar.remove();
        }
    }
});

// ==================================================
// Cosas extras
// ==================================================