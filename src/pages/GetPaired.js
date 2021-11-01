import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

const GetPaired = () => {
  return (
    <div>
      <Navbar />
      <Intro />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1>Get Paired</h1>
      </div>
    </div>
  );
};

export default GetPaired;
