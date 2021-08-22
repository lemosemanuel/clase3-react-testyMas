


const apiKey='4K8wPoKB1Lp1DP478PvpHXpFQZrHwtCm';
const urlEndpoint='http://api.giphy.com/v1/gifs/random?api_key='

const peticion = fetch(`${urlEndpoint}${apiKey}`);

peticion
    .then( resp => resp.json())
    .then(({data})=>{
        const {url} = data.images.original;

        const img=document.createElement('img');
        img.src=url;
        document.body.append(img);
        console.log(url)
    })
    .catch(console.warn);