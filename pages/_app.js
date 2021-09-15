// Importing React and other important Libraries
import React from "react";

// Importing custom components
import Layout from "../components/layout/Layout";

// Importing Global Css
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
