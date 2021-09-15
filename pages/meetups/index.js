// Importing React and other Important libraries
import React from "react";

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
const Meetups = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Meetups;