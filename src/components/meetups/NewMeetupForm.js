import classes from './NewMeetupForm.module.css';
import Card from "../ui/Card";
import {useRef} from "react";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    function submitHandler(e) {
        e.preventDefault();
        const title = titleInputRef.current.value;
        const image = imageRef.current.value;
        const address = addressRef.current.value;
        const description = descriptionRef.current.value;
        const meetupData = {
            title,
            image,
            address,
            description
        };
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="url" id="image" required ref={imageRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required ref={addressRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required  ref={descriptionRef}/>
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;