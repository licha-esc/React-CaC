const getNameAxios = async (idPost) => {
    try {

        let resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        console.log(resPost.data);
        // axios ya me trae el JSON en data

        let resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`); 
        // dentro de data tengo el JSON y ahi tengo el userId para acceder mas facil
        document.write(`${resUser.data.name}, vive en ${resUser.data.address.city} y escribio el post ${idPost}`);

    } catch (error) {
        console.log(error);
    }
}
getNameAxios(45);