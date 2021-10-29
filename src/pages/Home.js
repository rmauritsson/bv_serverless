import FAQs from "../components/FAQs";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQs />
      </div>
    </div>
  );
};

export default Home;
