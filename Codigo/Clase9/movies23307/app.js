//! 1- funcion que carga las peliculas
const cargarPeliculas = async () => {
    try {
        let respuesta = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=79a970b1bbf6549f4f16eebd524d0a40&language=es-MX&page=${pagina}`
        );

        if (respuesta.status === 200) {
            let datos = await respuesta.json(); // si la respuesta es 200 separa los datos y guarda en JSON
            let peliculas = ""; // se guarda como un string vacio

            datos.results.forEach((pelicula) => { // tengo que entrar a datos después a results y ahi hacer el foreach 
                // una vez que recorre cada una de las peliculas, con c/u que haga lo siguiente: 
                peliculas += `<div class="pelicula">

                <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
                <h3 class="titulo">${pelicula.title}</h3>
                <h6 class="puntaje">${pelicula.vote_average}</h6>
                <p class="sinopsis">${pelicula.overview}</p>
                </div>`;

            });

            document.querySelector(".contenedor").innerHTML = peliculas; // selecciona todo el código que está arriba y lo guarda en este contenedor y va a pasar uno por cada pelicula (debido al forEach)            
        } else if (respuesta.status === 404) { // la mayoría de los errores que no son 404 se tratan de algo propio y no con lo que está buscando el usuario
            console.log("la página no existe");
        }

    } catch (error) {
        console.log(error);
    }
    document.querySelector(".pagina").innerHTML = `${pagina}`;
};


//! 2- funcion para que cargue las peliculas
window.addEventListener("load", () => {
    cargarPeliculas();
});

let pagina = 1; // variable para controlar la paginacion

//! 3- capturar los botones
let btnAnterior = document.querySelector('#btnAnterior');
let btnSiguiente = document.querySelector('#btnSiguiente');


//! 4- funcion para boton anterior 
btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina -= 1;
        // aca tendremos que llamar a la funcion que va a cagar toda la pagina
        cargarPeliculas();
    }
})


//! 5- funcion para boton siguiente 
btnSiguiente.addEventListener("click", () => {
    if (pagina <= 500) {
        pagina += 1;
        // aca tendremos que llamar a la funcion que va a cagar toda la pagina
        cargarPeliculas();
    }
})


