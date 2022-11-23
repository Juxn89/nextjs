const getFavoritesPokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const toogleFavorites = (id: number) => {
    let favorites: number[] = getFavoritesPokemons();
    
    if(existInFavorites(id)) {
        favorites = favorites.filter(pokeID => pokeID !== id);
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id: number): boolean => {
    if(typeof window === 'undefined') return false;
    
    const favorites: number[] = getFavoritesPokemons()
    return favorites.includes(id);
}

export default {
    toogleFavorites,
    existInFavorites,
    getFavoritesPokemons
}