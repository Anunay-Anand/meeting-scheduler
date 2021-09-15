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

// Special function which needs to be there when getStaticProps is ised in dynamic page
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

// Using getStatisProps to load the data or pre fetch it during build
export async function getStaticProps(context) {
  // fetching the params to identify the item
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  // fetch data for a single meetup
  return {
    props: {
      id: meetupId,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
      title: "First Meetup",
      address: "Some Street 5, Some City",
      description: "This is a first meetup",
    },
  };
}

export default MeetupDetails;
