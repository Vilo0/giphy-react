const apiKey = 'Ult6O0L8EpsXouxqN8xgxI6hyOsLgVjf';

export default function getGifs({ keyword = 'one piece' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
        const { data } = response;
        const gifs = data.map(image => {
            const { images, id, title } = image;
            const { url } = images.downsized_medium;
            return { title, id, url }
        });
        return gifs;
    })
    .catch(err => {
        console.log(err);
    })

}