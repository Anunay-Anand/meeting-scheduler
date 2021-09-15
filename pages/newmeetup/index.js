// Importing React and other important libraries
import React from "react";

// Importing custom components (which are not page components)
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// Meetup Data handler
const addMeetupHandler = (enteredMeetupData) => {
  console.log(enteredMeetupData);
};

const NewMeetupPage = () => {
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
