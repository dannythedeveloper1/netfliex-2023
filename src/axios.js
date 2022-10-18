import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// (async () => {    
//     let URL = await instance.get('/movie/top_rated?api_key=e1be22fc273a3079dd38ee671558f1ef');
//     console.log(URL.data.results);
// })()
export default instance;