import React from 'react'; // Importa el módulo 'react'
import { useState } from 'react'; // Importa el hook 'useState' del módulo 'react'
import { useNavigate, Link } from 'react-router-dom'; // Importa el hook 'useNavigate' del módulo 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'; // Importa las funciones 'collection' y 'addDoc' del módulo 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'; // Importa la instancia de la base de datos de Firebase

export const Create = () => { // Define el componente 'Create'

    const  [lastName, setLastName]  = useState(""); // Crea un estado 'lastName' y una función 'setLastName' para modificarlo, iniciado con un string vacío
    const  [name, setName ] = useState(""); // Crea un estado 'name' y una función 'setName' para modificarlo, inicializado con una cadena vacía
    const  [number, setNumber]  = useState(0); // Crea un estado 'number' y una función 'setNumber' para modificarlo, inicializado con el valor 0
    const  [position, setPosition] = useState(""); // Crea un estado 'position' y una función 'setPosition' para modificarlo, iniciado con una cadena vacía

    const navigate = useNavigate(); // Obtiene la función de navegación del hook 'useNavigate'

    const playersCollection = collection(db, "players"); // Crea una referencia a la colección 'players' en la base de datos

    const createPlayer = async (e) => { // Define una función asincrónica 'createPlayer' que se ejecuta al enviar el formulario
        e.preventDefault(); // Evita el comportamiento predeterminado del envío del formulario

        await addDoc(playersCollection, { // Agrega un nuevo documento a la colección 'players' con los datos del jugador
            lastName: lastName,
            name: name,
            number: Number(number),
            position: position,
        });

        navigate("/") // Navega a la ruta "/"
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <h1>Create player</h1>
                    <form onSubmit={createPlayer}> {/* Al enviar el formulario, se ejecuta la función 'createPlayer' */}
                        <div className="mb-3">
                            <label className='form-label'>Name</label>
                            <input
                                value={name} // El valor del input está vinculado al estado 'name'
                                onChange={(e) => setName(e.target.value)} // La función 'setName' se ejecuta cuando cambia el valor del input, actualizando el estado 'name'
                                type="text" className='form-control' />
                        </div>

                        <div className="mb-3">
                            <label className='form-label'>Last Name</label>
                            <input
                                value={lastName} // El valor del input está vinculado al estado 'name'
                                onChange={(e) => setLastName(e.target.value)} // La función 'setLastName' se ejecuta cuando cambia el valor del input, actualizando el estado 'lastName'
                                type="text" className='form-control' />
                        </div>
                        
                        <div className="mb-3">
                            <label className='form-label'>Number</label>
                            <input
                                value={number} // El valor del input está vinculado al estado 'name'
                                onChange={(e) => setNumber(e.target.value)} // La función 'setName' se ejecuta cuando cambia el valor del input, actualizando el estado 'number'
                                type="text" className='form-control' />
                        </div>

                        
                        <div className="mb-3">
                            <label className='form-label'>Position</label>
                            <input
                                value={position} // El valor del input está vinculado al estado 'name'
                                onChange={(e) => setPosition(e.target.value)} // La función 'setName' se ejecuta cuando cambia el valor del input, actualizando el estado 'position'
                                type="text" className='form-control' />
                        </div>

                        <button type="submit" className='btn btn-primary'>Create player</button>
                        <Link to="/"><button className='btn btn-danger'>Cancel</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
