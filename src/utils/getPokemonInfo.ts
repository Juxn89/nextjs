import { pokeAPI } from "@api/index";
import { IPokemon } from "@interfaces/index";

export const getPokemonInfo = async (nameOrId: string) => {
    try {
        const { data } = await  pokeAPI.get<IPokemon>(`/pokemon/${ nameOrId }`)
        
        return { 
            id: data.id, 
            name: data.name, 
            sprites: data.sprites 
        }
    } catch (error) {
        return null;
    }
}