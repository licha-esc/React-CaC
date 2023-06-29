import "./PeliculasCard.css";

export const PeliculasCard = ({ pelicula }) => { // Recibe un objeto llamado 'pelicula' como argumento. Contiene información sobre una película específica.

    // Construimos la URL de la imagen de la película utilizando la propiedad 'poster_path' de la película.
    // La URL se compone agregando la parte fija 'https://image.tmdb.org/t/p/w300' a la ruta del póster de la película.
    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`; /* La sintaxis ${} se utiliza para combinar (concatenar) valores en una cadena de texto. En este caso, se está utilizando para construir una URL de imagen completa. */

    return ( // Retornamos una lista con la clase CSS 'movieCard'.
        <li className="movieCard">
            <img src={imgURL} alt={pelicula.title} className="movieImage" /> {/* retorna la imagen de la pelicula */}
            <div>{pelicula.title}</div> {/* retorna el titulo */}
            <div className="sinopsis">{pelicula.overview}</div>
        </li>
    )
}