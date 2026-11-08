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

    // Elimina las listas vacías que no tengan elementos.
    if (nivel === 5) {
        delete listas.H6;
    }
});

// ==================================================
// APARTADO 5
// ==================================================


// ==================================================
// APARTADO 6
// ==================================================

// ==================================================
// APARTADO 7
// ==================================================