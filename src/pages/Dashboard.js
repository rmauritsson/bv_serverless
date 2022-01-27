import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/**
         * Dashboard showing stats and profile
         * Button to that leads to page that has questions about assignment
         * After assignment leads back to dashboard
         * Dashboard Content? listener, or admin or broken vessel see diferrent things
         */}
        <div className="flex items-center justify-center w-full py-8">
          {/* Card code block start */}
          <div className="bg-white dark:bg-gray-800 shadow rounded">
            <div className="relative">
              <img
                className="h-56 shadow rounded-t w-full object-cover object-center"
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
                alt="dashboard"
              />
              <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                <img
                  className="w-full h-full overflow-hidden object-cover rounded"
                  src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                  alt="dashboard"
                />
              </div>
            </div>
            <div className="px-5 xl:px-10 pb-10">
              <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                <div className="flex items-center">
                  <svg
                    className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="w-4 text-gray-200 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                </div>
              </div>
              <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                <div className="xl:pr-16 w-full xl:w-2/3">
                  <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                    <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                      Marshall Mathers
                    </h2>
                    <div className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">
                      Pro
                    </div>
                  </div>
                  <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">
                    HI, I am a direct response copywriter from the US. When you
                    work with me, we have the same goal. Maximizing your ROI
                  </p>
                </div>
                <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                  <div className="mr-6 xl:mr-10">
                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                      82
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                      Reviews
                    </p>
                  </div>
                  <div className="mr-6 xl:mr-10">
                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                      28
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                      Projects
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                      42
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                      Approved
                    </p>
                  </div>
                </div>
                <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                  <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                    <div className="rounded-full bg-gray-200 text-gray-600 dark:text-gray-400 text-sm px-6 py-2 flex justify-center items-center">
                      Remote
                    </div>
                    <div className="ml-5 rounded-full bg-green-200 text-green-500 text-sm px-6 py-2 flex justify-center items-center">
                      Available
                    </div>
                  </div>
                  <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card code block end */}
        </div>

        <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
          <div className="py-6 xl:px-8 lg:px-8 md:px-8 px-4 flex justify-between items-center">
            <p className="font-bold text-sm xl:text-lg lg:text-lg md:text-lg text-gray-800 dark:text-gray-100">
              Your Activity
            </p>
          </div>

          <div className="xl:px-8 lg:px-8 md:px-8 px-4 py-6 bg-white dark:bg-gray-800">
            <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
              <div className="w-3/5">
                <p className="mb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                  UX Team Skype Session
                </p>
                <ul>
                  <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                    - Create a competitive analysis report, create personas and
                    also design UX research reports.
                  </li>
                  <li className="text-xs text-gray-600 dark:text-gray-400">
                    - Sitemap and information architecture visualizing the
                    organized model of all the components and information
                    contained in product.
                  </li>
                </ul>
              </div>
              <div className="w-3/12 flex flex-col items-end justify-between">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  9am - 10am
                </p>
                <div className="bg-gray-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                    Meeting
                  </span>
                </div>
              </div>
            </div>
            <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
              <div className="w-3/5">
                <p className="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">
                  UX Team Skype Session
                </p>
                <ul className="mb-5">
                  <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                    - Create a competitive analysis report, create personas and
                    also design UX research reports.
                  </li>
                  <li className="text-xs text-gray-600 dark:text-gray-400">
                    - Sitemap and information architecture visualizing the
                    organized model of all the components and information
                    contained in product.
                  </li>
                </ul>
                <div className="flex flex-wrap items-center">
                  <div className="w-6 h-6 bg-cover bg-center rounded-full border border-white relative shadow">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card21.jpg"
                      alt="dashboard"
                    />
                  </div>
                  <div className="w-6 h-6 bg-cover rounded-full -ml-1 border border-white shadow">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card22.jpg"
                      alt="dashboard"
                    />
                  </div>
                  <div className="w-6 h-6 bg-cover rounded-full bg-center -ml-1 border border-white shadow">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card23.jpg"
                      alt="dashboard"
                    />
                  </div>
                  <p className="text-xs ml-1 text-gray-600 dark:text-gray-400">
                    +3 attendees
                  </p>
                </div>
              </div>
              <div className="w-3/12 flex flex-col items-end justify-between">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  9am - 10am
                </p>
                <div className="bg-red-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                  <span className="text-xs text-red-500 font-normal">
                    Urgent
                  </span>
                </div>
              </div>
            </div>
            <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
              <div className="w-3/5">
                <p className="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">
                  UX Team Skype Session
                </p>
                <ul className="mb-5">
                  <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                    - Create a competitive analysis report, create personas and
                    also design UX research reports.
                  </li>
                  <li className="text-xs  text-gray-700 dark:text-gray-400">
                    - Sitemap and information architecture visualizing the
                    organized model of all the components and information
                    contained in product.
                  </li>
                </ul>
                <div className="flex flex-wrap items-center">
                  <div className="w-6 h-6 bg-cover bg-center rounded-full border border-white relative shadow">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card21.jpg"
                      alt="dashboard"
                    />
                  </div>
                  <div className="w-6 h-6 bg-cover rounded-full -ml-1 border border-white shadow">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card22.jpg"
                      alt="dashboard"
                    />
                  </div>
                  <div className="w-6 h-6 bg-cover rounded-full bg-center -ml-1 border border-white shadow">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card23.jpg"
                      alt="dashboard"
                    />
                  </div>
                  <p className="text-xs ml-1 text-gray-600">+3 attendees</p>
                </div>
              </div>
              <div className="w-3/12 flex flex-col items-end justify-between">
                <p className="text-xs text-gray-600 ">9am - 10am</p>
                <div className="bg-yellow-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                  <span className="text-xs text-yellow-600 font-normal">
                    Personal
                  </span>
                </div>
              </div>
            </div>
            <div className="p-5 flex justify-between rounded bg-gray-100">
              <div className="w-3/5">
                <p className="mb-4 text-sm font-bold text-gray-800">
                  UX Team Skype Session
                </p>
                <ul className="mb-5">
                  <li className="mb-2 text-xs text-gray-600">
                    - Create a competitive analysis report, create personas and
                    also design UX research reports.
                  </li>
                  <li className="text-xs text-gray-600 ">
                    - Sitemap and information architecture visualizing the
                    organized model of all the components and information
                    contained in product.
                  </li>
                </ul>
              </div>
              <div className="w-3/12 flex flex-col items-end justify-between">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  9am - 10am
                </p>
                <div className="bg-gray-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                    Meeting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
