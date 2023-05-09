import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"

// Creamos un componente de función llamado 'Counter'
export const Counter = () => {
    const [count, setCount] = useState(0)
// 1. Usamos el hook useState para crear una variable de estado llamada count y una función llamada setCount que nos permitirá actualizar el valor de la variable count. La variable count se inicializa con el valor 0.

    useEffect(() => {
        console.log("Cambio el valor");
    }, [count])
// 2. Usamos el hook "useEffect" para ejecutar una función cada vez que el valor de "count" cambia.  En este caso, estamos imprimiendo un mensaje en la consola.

    return (
        <>
            <Button onClick={() => setCount(count + 1)} size="sm" variant="success">+</Button>
            <p>numero: {count} </p>
            <Button onClick={() => setCount(count - 1)} size="sm" variant="success">-</Button>
        </>
    )
}
// 3. En esta parte del código, estamos devolviendo el contenido que se mostrará en el componente. Se muestra un botón con un signo más (+) que, cuando se hace clic, llama a la función 'setCount' para aumentar el valor de 'count' en 1. Luego, se muestra el valor de 'count' y un botón con un signo menos (-) que, cuando se hace clic, llama a la función 'setCount' para disminuir el valor de 'count' en 1. Además, mostramos el valor actual de "count" en un elemento "p" de HTML.
