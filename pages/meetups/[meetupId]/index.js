// Importing React and other Important libraries
import React from "react";

// Importing custom Components
import MeetupDetail from "../../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <React.Fragment>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        title="First Meetup"
        address="Some Street 5, Some City"
        description="This is a first meetup"
      />
    </React.Fragment>
  );
};

export default MeetupDetails;
