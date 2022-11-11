export async function getGifs(query) {
    const key = 'YVUEBToya77CxWfY9LnQOQYfh6Rc6BME';
    const api = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=10`;
    const response = await fetch(api);
    const {data=[]} = await response.json();

    const gifs = data.map(img => ({
      id: img.id,
      title:  img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs;
}