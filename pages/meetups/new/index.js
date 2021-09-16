// Importing React and other important libraries
import React from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

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

  return (
    <React.Fragment>
      <Head>
        <title>New Meetup</title>
        <meta
          name="description"
          content="Add your own meetup create amazing networking opportunities"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </React.Fragment>
  );
};

export default NewMeetupPage;
