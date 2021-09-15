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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/300px-Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Some address, 121 Fort knox, France",
    description: "After Innovaccer Party",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/300px-Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Some address, 321 Fort knox, France",
    description: "One year Innovaccer party",
  },
  {
    id: "m1",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/300px-Tour_Eiffel_Wikimedia_Commons.jpg",
    address: "Some address, 129 Fort knox, France",
    description: "Inovaccer for life",
  },
];

// Redirecting component simply redirects to the all meetups page
const Meetups = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Meetups;
