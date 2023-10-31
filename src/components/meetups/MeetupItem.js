import classes from './MeetupItem.module.css';
import Card from "../ui/Card";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext);
    const isFavorite = favoriteCtx.isFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (isFavorite) {
            favoriteCtx.removeFavorite(props.id)
        } else {
            favoriteCtx.addFavorite(props)
        }
    }

    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{isFavorite ? 'Remove From Favorites' : 'Add To Favorite'}</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;