import peliculas from "./peliculas.json"; /* Declara una variable llamada "peliculas" a la cual va a importar un array desde el archivo JSON "peliculas.json" */
import { PeliculasCard } from "./PeliculasCard"; /*  Importa el componente PeliculasCard desde el archivo "PeliculasCard.jsx" (o cualquier otro formato de archivo compatible con JavaScript) */
import "./PeliculasGrid.css"; /* Importa el CSS "PeliculasGrid.css" */


export const PeliculasGrid = () => { /* Se exporta y se define el componente PeliculasGrid */
    return (
        <ul className="moviesGrid"> {/* Renderiza una lista desordenada (ul) con la clase CSS "moviesGrid" */}
            {peliculas.map((pelicula) => ( // Utiliza el método 'map' p/ recorrer el array 'peliculas' y generar una tarjeta de película por cada elemento para luego guardarlo en la variable 'pelicula'
                <PeliculasCard key={pelicula.id} pelicula={pelicula} /> /* Mapea y renderiza una por una PeliculasCard */
            ))}
        </ul>
    );
}
