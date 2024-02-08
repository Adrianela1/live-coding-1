// Escribe tu código aquí.

// Funcion para obtener las palabras mas largas que un string nos da
function bigWords(str, arr) {
    return arr.filter(word => word.length > str.length);
}

// Función para imprimir un array de strings dentro de una lista en el HTML
function printArray(arr) {
    const ul = document.querySelector('ul');
    ul.innerHTML = ''; 
    arr.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        ul.appendChild(li);
    });
}


const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca'];


const filteredArray = bigWords('bocina', myArray);


printArray(filteredArray);
