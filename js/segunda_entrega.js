let continuar = true;

const publicaciones = [
  {
    id: 1,
    category: "noticias",
    title: "Sonata Artica lanza un nuevo single",
    status: 'publicado'
     },
  {
    id: 2,
    category: "noticias",
    title: "Ramones: A 20 años del ultimo show en Argentina",
    status: 'publicado'
     },
  {
    id: 3,
    category: "noticias",
    title: "Queen regresa al pais con su nueva gira mundial",
    status: 'No publicado'
     },
  {
    id: 4,
    category: "coberturas",
    title: "En fotos: Conociendo Rusia en el Teatro Vorterix",
    status: 'No publicado'
  },
  {
    id: 5,
    category: "coberturas",
    title: "En fotos: La Renga en el Estadio de Racing",
    status: 'publicado'
    
  },
  {
    id: 6,
    category: "coberturas",
    title: "En fotos: Fito Paez en el Luna Park",
    status: 'publicado'
    
  },
  {
    id: 7,
    category: "noticias",
    title: "Charly Garcia prepara su nuevo material de estudio",
    status: 'No publicado'
     },
];



// Se inicia el bucle principal
while (continuar) {
    let eleccion = prompt('Escribir "agregar" para realizar una nueva publicacion\nEscribir "buscar" para acceder al buscador\nEscribir "salir" para terminar');
    eleccion = eleccion.toLowerCase();

    if (eleccion === 'agregar') {
        // Lógica para agregar una nueva publicación
        const nuevaPublicacion = prompt('Ingrese la categoria de la nueva publicación:');
        const nuevoTitulo = prompt ('Ingrese el titulo de la nueva publicacion')
        publicaciones.push(nuevoTitulo);
        alert('Nueva publicación agregada: ' + nuevoTitulo);
    } else if (eleccion === 'buscar') {
        // Lógica para buscar en las publicaciones existentes
        const terminoBusqueda = prompt('Ingrese término de búsqueda:');
        const resultadosBusqueda = publicaciones.filter(publicaciones => {
            // Verificar si publicacion es un string antes de aplicar includes
            return typeof publicaciones === 'string' && publicaciones.includes(terminoBusqueda);
        });

        if (resultadosBusqueda.length > 0) {
            alert('Resultados de la búsqueda:' + resultadosBusqueda);
        } else {
            alert('No se encontraron resultados para la búsqueda.');
        }
    } else if (eleccion === 'salir') {
        // Terminar el bucle si el usuario elige salir
        continuar = false;
    } else {
        alert('Opción no válida. Por favor, elija "agregar", "buscar" o "salir".');
    }
}

console.log(publicaciones)



// class busquedas {
//     constructor(publicaciones){
//         this.publicaciones = publicaciones;
//     }

//     addPublicacion(publicacion) {
//         let id = this.list.length + 1,
//         publicacion.id = id;

//         this.list.push(publicacion);
//     }

//     getSearchByID(id){
//         const busqueda = this.publicaciones.find( item => item.id === id);
//         busqueda ? busqueda : 'No hay resultados para su busqueda'
//     }

//     getSearchByCategory(category){
//         const publicaciones = this.publicaciones.filter( item => item.category === category );
//         return publicaciones;
//     }

//     getSearchByTitle(keyword){
//         const filteredPublicaciones = this.publicaciones.filter(item => item.title.toLowerCase().includes(title.toLowerCase())
//         );
//         return filteredPublicaciones;
//     }
// }


// const resultados = publicaciones.map((e) => e.name);
// const resultados2 = publicaciones.map((e) => e.id);
// console.log(resultados);
// console.log(resultados2);

// class Busquedas {
//     constructor(publicaciones) {
//         this.publicaciones = publicaciones;
//     }

//     addPublicacion(publicacion) {
//         const id = this.publicaciones.length + 1;
//         publicacion.id = id;
//         this.publicaciones.push(publicacion);
//     }

//     getSearchByID(id) {
//         const busqueda = this.publicaciones.find(item => item.id === id);
//         return busqueda ? busqueda : 'No hay resultados para su búsqueda';
//     }

//     getSearchByCategory(category) {
//         const publicaciones = this.publicaciones.filter(item => item.category === category);
//         return publicaciones;
//     }

//     getSearchByTitle(keyword) {
//         const filteredPublicaciones = this.publicaciones.filter(item =>
//             item.title.toLowerCase().includes(keyword.toLowerCase())
//         );
//         return filteredPublicaciones;
//     }
// }

// console.table(this.publicaciones);
// let mensaje = '';

// // const busquedasInstance = new Busquedas(publicaciones);

// // // Ejemplo de uso
// // busquedasInstance.addPublicacion({
// //     category: "noticias",
// //     title: "Nueva publicación sobre música",
// // });

// // const searchResultByID = busquedasInstance.getSearchByID();
// // console.log(searchResultByID);

// // const searchResultByCategory = busquedasInstance.getSearchByCategory("");
// // console.log(searchResultByCategory);

// // const searchResultByTitle = busquedasInstance.getSearchByTitle("");
// // console.log(searchResultByTitle);
