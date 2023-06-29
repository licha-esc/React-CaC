import { useState, useEffect } from "react" // importa los hooks
import { Link } from "react-router-dom" // importa las rutas
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore" // importa las funciones de firestore (BD donde tenemos alojado el firebase)
import { db } from "../firebaseConfig/firebase.js" // importa la función db de firebase.js (conexión entre firestore y firebase)
import Swal from "sweetalert2"

//? Aclaración: En firestore la colección = BD y doc = dato. En este caso mi colección se llama "players".

export const Show = () => {
    //! 1 Configurar el hook useState:
    const [players, setPlayers] = useState([]); // Variable de estado para almacenar los datos de los jugadores.


    //! 2 Referenciar a la colección "players" de firestore (BD):
    const playersCollection = collection(db, "players"); // Recibe dos parámetros: como conectarte y cual es la BD que queres traer.


    //! 3 Función para mostrar todos los docs de la BD:
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


    //! 4 Función para eliminar un doc (jugador) de la BD:
    const deletePlayer = async (id) => {
        const playersDoc = doc(db, "players", id);// Crea una referencia al documento específico en la colección "players" usando el ID proporcionado.
        await deleteDoc(playersDoc); // Elimina el documento utilizando la referencia creada.
        getPlayers() // Llama a la función getPlayers() para actualizar la lista de jugadores después de eliminar uno.
    }


    //! 5 Función para confirmar la eliminación de un doc(dato), usando sweet alert:
    const confirmDelete = (id) => {
        Swal.fire({
            title: '¿Estás seguro/a?',
            text: "¡No puedes revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar'
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


    //! 6 Hook useEffect: se usa para que al entrar al index del componente se carguen todos los jugadores.
    useEffect(() => {
        getPlayers();
        // eslint-disable-next-line
    }, [])


    //! 7 Devolvemos la vista de nuestro componente
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-grid gap-2">
                            <Link to="/create" className="btn btn-dark mt-2 mb-2 text-success"><h5>Crear</h5></Link>
                            <table className="table table-hover table-dark">
                                <thead>
                                    <tr className="text-info">
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Número</th>
                                        <th>Posición</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {players.map((player) => ( // Itera sobre el array de jugadores y genera una fila por cada jugador
                                        <tr key={player.id}> {/* La'key' es necesaria p/ identificar de manera única cada fila en React */}
                                            <td>{player.name}</td>
                                            <td>{player.lastName}</td>
                                            <td>{player.number}</td>
                                            <td>{player.position}</td>
                                            <td> {/* Contiene los enlaces p/ editar y eliminar a un jugador */}
                                                <Link to={`/edit/${player.id}`} className="btn btn-dark"><i class="text-light fa-solid fa-user-pen"></i></Link>
                                                <button onClick={() => { confirmDelete(player.id) }} className="btn btn-dark"><i class="text-danger fa-solid fa-user-xmark"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );



}