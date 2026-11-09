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
const cuerpoArticulo = document.querySelector('.Body'); 
const btnFuenteChica = document.querySelector('#btn_fuente_chica'); 
const btnFuenteMedia = document.querySelector('#btn_fuente_media'); 
const btnFuenteGrande = document.querySelector('#btn_fuente_grande'); 
const botonesFuente = document.querySelectorAll('.btn_fuente');

// MODO OSCURO
botonModo.addEventListener('click', function () { 
    document.body.classList.toggle('oscuro'); //Actualizamos texto según el estado
    if (document.body.classList.contains('oscuro')) { 
        botonModo.textContent = 'Modo claro';
    } 
    else { 
        botonModo.textContent = 'Modo oscuro';
    } }); 
    
// FUENTES 
function actualizarBotonFuente(botonActivo) { 
    botonesFuente.forEach(function (btn) { 
        btn.classList.remove('activo'); 
    }); 
    botonActivo.classList.add('activo'); 
} 
    
//Botón Pequeño 
btnFuenteChica.addEventListener('click', function () { 
    cuerpoArticulo.classList.remove('fuente_grande'); 
    cuerpoArticulo.classList.add('fuente_pequena'); 
    actualizarBotonFuente(btnFuenteChica);
}); 
//Botón Estándar
btnFuenteMedia.addEventListener('click', function () { 
    cuerpoArticulo.classList.remove('fuente_pequena', 'fuente_grande'); 
    actualizarBotonFuente(btnFuenteMedia); 
}); 
//Botón Grande 
btnFuenteGrande.addEventListener('click', function () { 
    cuerpoArticulo.classList.remove('fuente_pequena'); 
    cuerpoArticulo.classList.add('fuente_grande'); 
    actualizarBotonFuente(btnFuenteGrande); 
});

// ==================================================
// APARTADO 6
// ==================================================

// ==================================================
// APARTADO 7
// ==================================================