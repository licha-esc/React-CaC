import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";


export const Edit = () => {
    const [lastName, setLastName] = useState(""); // Crea un estado 'lastName' y una función 'setLastName' para modificarlo, iniciado con un string vacío
    const [name, setName] = useState(""); // Crea un estado 'name' y una función 'setName' para modificarlo, inicializado con una cadena vacía
    const [number, setNumber] = useState(0); // Crea un estado 'number' y una función 'setNumber' para modificarlo, inicializado con el valor 0
    const [position, setPosition] = useState(""); // Crea un estado 'position' y una función 'setPosition' para modificarlo, iniciado con una cadena vacía

    const navigate = useNavigate();

    const { id } = useParams();

    //! Función que actualiza un documento:

    const update = async (e) => {
        e.preventDefault();

        const playersDoc = doc(db, "players", id);

        const data = {
            lastName: lastName,
            name: name,
            number: Number(number),
            position: position,
        };

        await updateDoc(playersDoc, data);
        navigate("/");
    }

    //! Función que trae un doc por su id:
    const getPlayerById = async (id) => {
        const playersDoc = await getDoc(doc(db, "players", id));

        if (playersDoc.exists()) {
            setLastName(playersDoc.data().lastName);
            setName(playersDoc.data().name);
            setNumber(playersDoc.data().number);
            setPosition(playersDoc.data().position);
        } else {
            console.log("El jugador no existe");
        }
    }

    //! useEffect
    useEffect(() => {
        getPlayerById(id);
    }, [id]);

    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Edit player</h1>
                    <form onSubmit={update}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Last Name</label>
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text" className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Number</label>
                            <input
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                type="text" className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Position</label>
                            <input
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                type="text" className='form-control' />
                        </div>

                        <button type="submit" className='btn btn-primary'>Edit player</button>
                        <Link to="/"><button className='btn btn-danger'>Cancel</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

