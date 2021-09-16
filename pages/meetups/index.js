// Importing React and other Important libraries
import React from "react";
// import { MongoClient } from "mongodb";

// Importing Helper function for mongoConnect
import { mongoConnect } from "../../helpers/mongoConnect";

// Importing custom components
import MeetupList from "../../components/meetups/MeetupList";

// Creating Dummy data for meetup
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "Some address, 121 Fort knox, France",
    description: "After Innovaccer Party",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "Some address, 321 Fort knox, France",
    description: "One year Innovaccer party",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    address: "Some address, 129 Fort knox, France",
    description: "Inovaccer for life",
  },
];

// Redirecting component simply redirects to the all meetups page
const Meetups = (props) => {
  return <MeetupList meetups={props.meetups} />;
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
  const { meetupCollection, client } = await mongoConnect();

  // fetch some data (Directly from Mongo)
  // const client = await MongoClient.connect(
  //   "mongodb+srv://anunay:nD8BXTO9SIjpshOh@cluster0.id530.mongodb.net/meetup?retryWrites=true&w=majority"
  // );
  // Creating database
  // const db = client.db();

  // Connecting to the database
  // const meetupCollection = db.collection("meetup");

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
    revalidate: 10,
  };
}

export default Meetups;
