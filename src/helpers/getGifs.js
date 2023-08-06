export default async (category) => {

    //encodeURI() es una funcion de js que reemplaza los espacios por %20
    const url = `https://api.giphy.com/v1/gifs/search?api_key=n3dPcpHHpQLGak02HLHiNKuXJOuSLVRD&q=${encodeURI(category)}&limit=2&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            // url: img.images.downsized_medium.url
            url: img.images?.original.url
        }
    });

    return gifs;
}
