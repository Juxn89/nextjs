import axios from 'axios';

const pokeAPI = axios.create({
    baseURL: process.env.NEXT_POKEMON_API_BASE
})

export default pokeAPI