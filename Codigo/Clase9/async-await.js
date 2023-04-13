// Asincronismo: consiste en poder iniciar una acción sin depender de la finalizacion de las anteriores. 
// nuestro programa sigue avanzando sin esperar que cada acción termine.

const getNameAsync = async (idPost) => {
    try {
        let resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`); 
        // 1ro llamo a la info del idPost y la guardo en una variable (resPost) junto con los varios demás archivos que viaja 
        // antes de llamar a la API utilizo el await porque se espera a que se reciba una respuesta del servidor antes de continuar con el siguiente bloque de código
        // luego utilizo fetch para decir cual es la pagina que quiero consultar
        console.log(resPost);

        let post = await resPost.json(); 
        // de toda la respuesta, extraemos el JSON (que tiene la info del idPost) y lo guardamos en otra variable
        console.log(post);

        let resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        let user = await resUser.json();

        console.log(`el post ${idPost} con el titulo "${post.title}" lo escribió: ${user.name} y vive en: ${user.address.city}`);
    } catch (error) {
        console.log(error);
    }
}
getNameAsync(48); 