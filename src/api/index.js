import axios from 'axios'

export const api_key ="09a303f90fca409cf37d0a9d33c7cbde";
export const image_url ="https://image.tmdb.org/t/p/original";
 
export const api =axios.create({
baseURL:"https://api.themoviedb.org/3"
})

