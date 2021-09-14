// Importing React and other important libraries
import React from "react";
import { useRouter } from "next/router";

const DetailPage = () => {
  // Getting access to our Router Object
  const router = useRouter();

  // Getting the query value
  const query = router.query.newsId;

  return <h1>Welcome to DetailPage</h1>;
};

export default DetailPage;
