import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

const Professionals = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid md:grid-cols-2 mt-8 lg:grid-cols-1 gap-x-8 gap-y-8">
          <div className="container mx-auto w-5/6 sm:w-2/3 h-full">
            {/* Code block starts */}
            <div className="w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow rounded-t">
              <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2">
                <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">
                  Job Postings
                </h2>
                <p className="font-normal text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Come work in an environment that allows you to learn alongside
                  accomplished developers.
                </p>
              </div>

              <ul className="lg:flex items-center lg:mt-6 xl:mt-0">
                <li className="font-normal flex justify-center items-center py-2 px-4 rounded mr-4 xl:mr-0 xl:ml-0 bg-gray-200 dark:bg-gray-700 text-indigo-700 dark:text-indigo-600 text-sm">
                  Book Appointment
                </li>
              </ul>
            </div>
            {/* Code block ends */}
          </div>

          <div className="container mx-auto w-5/6 sm:w-2/3 h-full">
            {/* Code block starts */}
            <div className="w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow rounded-t">
              <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2">
                <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold">
                  Job Postings
                </h2>
                <p className="font-normal text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Come work in an environment that allows you to learn alongside
                  accomplished developers.
                </p>
              </div>

              <ul className="lg:flex items-center lg:mt-6 xl:mt-0">
                <li className="font-normal flex justify-center items-center py-2 px-4 rounded mr-4 xl:mr-0 xl:ml-0 bg-gray-200 dark:bg-gray-700 text-indigo-700 dark:text-indigo-600 text-sm">
                  Book Appointment
                </li>
              </ul>
            </div>
            {/* Code block ends */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Professionals;
