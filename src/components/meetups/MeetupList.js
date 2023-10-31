import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';

function MeetupList({meetups}) {
    return <div>
        <ul className={classes.list}>
            {
                meetups.map(meetup => <MeetupItem key={meetup.id} {...meetup}/>)
            }
        </ul>
    </div>
}

export default MeetupList;