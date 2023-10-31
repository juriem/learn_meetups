import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        fetch('https://meetups-44a54-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
            .then(response => {
                return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                setMeetups(Object.keys(data).map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                }));
            })
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return <div>
        <h2>All Meetups</h2>
        <MeetupList meetups={meetups} />
    </div>
}

export default AllMeetupsPage;