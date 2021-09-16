// Importing React and other important libraries
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

// Custom Components
import LoadingSpinner from "../components/ui/LoadingSpinner";

const HomePage = () => {
  // Get the Router object
  const router = useRouter();

  // Creating a useEffect to redirect
  useEffect(() => {
    router.replace("/meetups");
  }, [router]);

  return (
    <artcile className="centered">
      <LoadingSpinner />
    </artcile>
  );
};

export default HomePage;
