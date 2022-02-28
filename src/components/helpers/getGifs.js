
    export const getGifs = async( category ) => {
             
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=HbfLG24MZdnzj5qmhMGU750n89wk4YOK`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( obj => {
            return {
                id: obj.id,
                title: obj.title,
                url: obj.images?.downsized_medium.url // Usamos la condición (?) para validar si las imágenes vienen, entonces se muestra la data. 
            }
        });

        return gifs;
    };