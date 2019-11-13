import axios from 'axios';

const get = (url) => {
   return axios.get(url).then(x=>x.data)
}
const post = (url, data) => {
    return axios.post(url, data)
}
const del = (url, data) => {
    return axios.delete(url)
}
const put = (url, data) => {
    return axios.post(url, data)
}

export {get, post, del, put};
