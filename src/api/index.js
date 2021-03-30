import axios from 'axios';

const baseurl="https://api.unsplash.com";

const API = {
    getPhotos: () => axios({
        url:baseurl + '/photos',
        method: "get",
        params: {
            client_id: "ZepPXzFL3PNNTm3dBXoI6Bq3sWMu_hCFYdxDjF7jV2M",
            per_page: 10
        }

    })
}

export default API;