


// async await

const getImagenPromesa=()=>{
    const promesa= new Promise(
        (resolve,reject)=>{
            resolve('as')
    })
    return promesa
}

getImagenPromesa().then(console.log)

// ahora con async y await 
const getImagenPromesa1= async()=>{
    try{
    const apiKey='4K8wPoKB1Lp1DP478PvpHXpFQZrHwtCm';
    const urlEndpoint='http://api.giphy.com/v1/gifs/random?api_key='
    const respuesta = await fetch(`${urlEndpoint}${apiKey}`);
    const {data}= await respuesta.json()
    const {url}=data.images.original;
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
    console.log(url)
    return url;
    }
    catch(error){
        console.error(error)
        return error;
    }
}
getImagenPromesa1()


export{
    getImagenPromesa1
}