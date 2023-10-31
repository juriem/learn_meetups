import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory } from 'react-router-dom';

function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHandler(meetup) {
        fetch('https://meetups-44a54-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => history.replace('/'))
    }

    return (
        <section>
            <h2>New Meetup</h2>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage;