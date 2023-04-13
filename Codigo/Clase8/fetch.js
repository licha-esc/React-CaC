let getNameFetch = (idPost) => {
    try { 
        // dentro del try va a ir el código en caso de que toda la consulta salga bien. si hay un error va al catch y hace lo que está dentro del mismo.
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`) 
        // recibe como parámetro la url de la cual vamos a solicitar informacion (el llamado asíncrono), pedimos la página de posts y la url se completa con el numero que solicitemos donde está la variable

            .then((res) => { 
                // cuando la promesa se cumple se ejecuta el primer .then, el cual retorna la respuesta de ese llamado asíncrono y lo hace en formato JSON
                // console.log(res);
                return res.json(); 
                // el primer .then guarda la respuesta (res) en un JSON; que no viaja solo, sino en conjunto con otra info
            })

            .then((post) => { 
                // acá obtengo directamente el JSON que necesito separado de toda la información guardada en nuestra variable
                // la respuesta que se guardó anteriormente en JSON ahora se guarda en una variable; en este caso post, que contiene los datos del idPost: title, userId, el body del post, etc --> es como hacer: let post = res.json() 

                // console.log(post);
                // console.log(`el post dice: ${post.title}`);

                fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`) 
                // una vez que tengo el JSON en la varible post puedo decir lo que quiero hacer con el; en este caso hacemos otro llamado, esta vez de la página de users porque lo único que necesito del post es saber el userId

                    .then((res) => { 
                        // guardamos la respuesta nuevamente en JSON, no importa si es con el mismo nombre
                        // console.log(res);
                        return res.json();
                    })

                    .then((user) => { 
                        // guardamos nuevamente la respuesta de JSON en la variable user que contiene todos los datos del userId: email, nombres, etc
                        console.log(`el post ${idPost} con el titulo "${post.title}" lo escribió: ${user.name} y vive en: ${user.address.city}`);
                        console.log(user);
                    });
            });
    } catch (error) { 
        // catch agarra el código de error que me devuelve el servidor (el cual viaja junto con la API) y lo guarda en esta variable
        console.log(error); // en este caso muestra por consola el error
    }
}

getNameFetch(93); 