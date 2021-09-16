// Importing React and other important libraries
import React from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

// Importing custom components (which are not page components)
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  // Getting Router object from useRouter
  const Router = useRouter();

  // Meetup Data handler
  const addMeetupHandler = async (enteredMeetupData) => {
    try {
      // Preparing the data to be sent
      const meetupData = JSON.stringify(enteredMeetupData);

      // Sending an HTTP request to the server
      const res = await axios.post("/api/new-meetup", meetupData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Redirecting to all meetups page
      Router.push("/meetups");

      // Getting our response data
    } catch (error) {
      console.log(error.message);
    }
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
