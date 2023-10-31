import {createContext, useState} from "react";

const FavoritesContext= createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => {},
    removeFavorite: (id) => {},
    isFavorite: (id) => {}
});

export function FavoriteContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])


    function addFavoriteHandler(meetup) {
        setUserFavorites(prevState => {
            return prevState.concat(meetup);
        })
    }

    function removeFavoriteHandler(id) {
        setUserFavorites(prevState => {
            return prevState.filter(i => i.id !== id)
        })
    }

    function itemIsFavoriteHandler(id) {
        console.log('is favorite: ', id, userFavorites, userFavorites.some(i => i.id === id));
        return userFavorites.some(i => i.id === id)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>
}

export default FavoritesContext;