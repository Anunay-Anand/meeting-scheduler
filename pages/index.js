// Importing React and other important libraries
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const HomePage = () => {
  // Get the Router object
  const router = useRouter();

  // Creating a useEffect to redirect
  useEffect(() => {
    router.replace("/meetups");
  }, [router]);

  return null;
};

export default HomePage;
