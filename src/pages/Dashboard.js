import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        This is the Dashboard
      </div>
      {/**
       * Dashboard showing stats and profile
       * Button to that leads to page that has questions about assignment
       * After assignment leads back to dashboard
       * Dashboard Content? listener, or admin or broken vessel see diferrent things
       */}
    </div>
  );
};

export default Dashboard;
