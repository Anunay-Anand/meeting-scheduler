// Importing React and other Important libraries
import React from "react";
import { ObjectId } from "bson";
import Head from "next/head";

// Importing helper function for mongoConnect
import { mongoConnect } from "../../../helpers/mongoConnect";

// Importing custom Components
import MeetupDetail from "../../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description}></meta>
      </Head>
      <MeetupDetail
        id={props.meetupData.id}
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </React.Fragment>
  );
};

// Special function which needs to be there when getStaticProps is ised in dynamic page
export async function getStaticPaths() {
  // Using helper functions to get Client and Collection
  const { client, meetupCollection } = await mongoConnect();

  // Using find method to get all meetups
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

  // Closing the connection
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

// Using getStatisProps to load the data or pre fetch it during build
export async function getStaticProps(context) {
  // fetching the params to identify the item
  const meetupId = context.params.meetupId;

  // Using helper functions to get Client and Collection
  const { client, meetupCollection } = await mongoConnect();

  // Getting info to the single meetup
  const selectedMeetup = await meetupCollection.findOne({
    _id: ObjectId(meetupId),
  });

  // fetch data for a single meetup
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
