import axios from 'axios'
const searchItems = async (term) => {
    const res= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID MiUdn-WgM0AM5XEW7XzGbrp-qRFW7FZx6u8eI01Nz-I'
        },
        params:{
            query:term
        }
    })
    return res.data.results
};

export default searchItems