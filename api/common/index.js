import axios from 'axios'

function movieList(){
    const url = '/api/'
    // const url = 'https://yts-proxy1.vercel.app/list_movies.json?sort_by=rating'
  
    return axios.get(url)
}

export { movieList }