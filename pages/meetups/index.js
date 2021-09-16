// Importing React and other Important libraries
import React from "react";
import Head from "next/head";

// Importing Helper function for mongoConnect
import { mongoConnect } from "../../helpers/mongoConnect";

// Importing custom components
import MeetupList from "../../components/meetups/MeetupList";

// Redirecting component simply redirects to the all meetups page
const Meetups = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a list of highly Reactive meetups!"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API or file system
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// Using static generation to fetch all data during pre rendering
export async function getStaticProps() {
  // fetch some data (Directly from Mongo)
  const { meetupCollection, client } = await mongoConnect();

  // Using find method to get all meetups
  const meetups = await meetupCollection.find({}).toArray();

  //Close the connection
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Meetups;
