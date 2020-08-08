import axios from 'axios'

const getList = (params) => {
    const category = params.category
    //If Auth Key will expire then open below url
    // return  axios.get(`http://localhost:3000/dummyData/${category}.json`)

    //If Auth Key will expire then comment below url
    return axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=1fc1cf9ba4634f988745e2d7d92e5796`)
};

export {
    getList
}
