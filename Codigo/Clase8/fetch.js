let getNameFetch = (idPost) => {
    try { // dentro del try va a ir el código en caso de que toda la consulta salga bien. si hay un error va al catch y hace lo que está dentro del mismo.
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`) // fetch recibe como parámetro la url, pedimos la página de posts y la url se completa con el numero que solicitemos donde está la variable

            .then(res => {
                // console.log(res);
                return res.json(); // con el primer .then guardamos la respuesta (res) en un JSON, el cual no viaja solo sino en conjunto de otra info
            })

            .then(post => { // luego esa respuesta se guarda en una variable, en este caso post, que contiene la persona que lo escribió, el Id, el posteo, etc --> post = res.json() 
                // console.log(post);
                // console.log(`el post dice: ${post.title}`);
                fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`) // hacemos otro pedido, esta vez de la página de users

                    .then(res => { // guardamos la respuesta nuevamente en JSON, no importa si es con el mismo nombre
                        // console.log(res);
                        return res.json(); // 
                    })

                    .then(user => { // guardamos nuevamente la respuesta de JSON en la variable user que contiene todos los datos del user: email, nombres, etc
                        console.log(user);
                        console.log(`el post ${idPost} con el titulo "${post.title}" lo escribió: ${user.name} y vive en: ${user.address.city}`);
                    });
            });
    } catch (error) { // catch agarra el código de error que me devuelve el servidor (el cual viaja junto con la API) y lo guarda en esta variable
        console.log(error); // en este caso muestra por consola el error
    }
}

getNameFetch(54);
