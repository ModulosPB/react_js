const obtenerGifs = async(categoria) => {
    // api.giphy.com/v1/gifs/search?api_key=WRjpy7IWQthjCLGZDJtuSMDiQNg5Nfvu&q=Trump
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WRjpy7IWQthjCLGZDJtuSMDiQNg5Nfvu&q=${ categoria }&limit=5`
    const resp = await fetch(url)
    const { data } = await resp.json()
    // console.log(data)
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
  return gifs
    // console.log(gifs)
}
export default obtenerGifs