import { useState, useEffect } from "react" // importa la información
import { Link } from "react-router-dom" // importa las rutas
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore" // importa las funciones de firestore (BD donde tenemos alojado el firebase)
import { db } from "../firebaseConfig/firebase.js" // importa la función db de firebase.js (conexión entre firestore y firebase)
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const mySwal = withReactContent(Swal);

// Aclaración: En firestore => colección = BD y doc = dato. En este caso mi base de datos se llama "players"

export const Show = () => {
//1 Configurar los hooks:
    const [players, setPlayers] = useState([]); // Variable de estado para almacenar los datos de los jugadores.


//2 Referenciar a la colección "players" de firestore (BD):
    const playersCollection = collection(db, "players"); // Recibe dos parámetros: como conectarte y cual es la BD que queres traer.


//3 Función para mostrar todos los docs de la BD:
    const getPlayers = async () => { // getPlayers es el nombre de mi función 
        const data = await getDocs(playersCollection); /* Obtener todos los documentos de la colección "players".
        De data yo espero (await) traer todos los documentos (getDocs) => que recibe como parametro la colección */
        console.log(data.docs);

        setPlayers( // Recorre la data.docs y actualiza los players, que antes era un array vacío (useState([])). Ahora tiene los jugadores.     
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) // Actualizar el estado con los datos obtenidos. De doc.data saca c/u de los docs. Luego defino cual va a ser el id, y digo que de cada doc, va a ser el id. 
        )
        console.log(players);
    }


/* Hasta ahora el componente Show 1) inicializa una variable de estado players, 2) crea una referencia a la colección "players" en Firestore y 
3) define una función getPlayers para recuperar datos de la colección y actualizar el estado. */


//4 Función para eliminar un doc (jugador) de la BD:
    const deletePlayer = async (id) => {
        const playersDoc = doc(db, "players", id);// Crea una referencia al documento específico en la colección "players" usando el ID proporcionado.
        await deleteDoc(playersDoc); // Elimina el documento utilizando la referencia creada.
        // getPlayers() // Llama a la función getPlayers() para actualizar la lista de jugadores después de eliminar uno.
    }


//5 Función para la confirmación de la eliminación de un doc, usando sweet alert:
    const confirmDelete = (id) => {
        Swal.fire({
            title: '¿Estás seguro/a?',
            text: "¡No podes revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'btn btn-success',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero borrarlo.'
        }).then((result) => {
            if (result.isConfirmed) {
                deletePlayer(id)  // Luego de que se haya confirmado recién llama a la función eliminar.
                Swal.fire(
                    'Borrado.',
                    'Borraste un jugador.',
                    'success'
                )
            }
        })
    }


//6 useEffect: se usa para que cuando entres al index del componente se carguen todos los jugadores.
    useEffect(() => {
        getPlayers();
    }, [])


//7 Devolvemos la vista de nuestro componente
    return (
        <>
            <h1>Hola</h1>
        </>
    )

}