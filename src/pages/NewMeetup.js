import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(meetup) {

    }

    return (
        <section>
            <h2>New Meetup</h2>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage;