import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Assignment = () => {
  //use fetch API to call the getAvailableListener function
  //display availabe listeners
  //Assign random listener to guest and disable generation until after 24 hrs
  //Send listener a message to contact the admin or guest via twilio
  //Update database about listener

  const [listeners, setListeners] = useState([]);

  useEffect(() => {
    const loadListeners = async () => {
      try {
        //const res = fetch("/.netlify/functions/getAvailableListeners");
        axios.get("/.netlify/functions/getAvailableListeners").then((res) => {
          const response = res.data;
          setListeners(response);
          console.log("Data", listeners);
        });
      } catch (error) {
        console.error("Error", error);
      }
    };
    loadListeners();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="px-6">
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Talk to a volunteer
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
        </section>
        <section className="grid md:grid-cols-2 mt-8 lg:grid-cols-3 gap-x-8 gap-y-8">
          {listeners.map((listener) => (
            <div key={listener.id}>
              <article className="bg-white group flex relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                <div className="p-6 h-20 md:h-24 lg:h-24">
                  <div className="h-20 w-20 flex justify-center">
                    <img
                      className="object-cover h-20 w-20 rounded-full"
                      src={
                        listener.fields.Photo
                          ? listener.fields.Photo[0].url
                          : ""
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="px-3 py-4">
                  <div className="flex items-center">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75"></span>
                  </div>
                  <h3 className="text-xs text-gray-500 mb-4">
                    <div className="bg-white w-16 flex justify-center border border-green-500 py-0 px-2 text-green-500 rounded-lg">
                      <span className="absolute inset-0 text-xs"></span>
                      Available
                    </div>
                  </h3>
                  <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                    {listener.fields.Name}
                  </p>
                  <p className="text-sm font-normal text-gray-900 group-hover:text-indigo-600">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  {listener.fields.Topics.map((topic) => (
                    <span
                      key={topic}
                      className="bg-blue-500 rounded-full px-2 text-xs text-blue-50"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </section>

        <section className=" bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                  <div className="px-4 flex-auto"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-16">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Talk to a volunteer
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <a
                  href="../index.html"
                  className="font-bold text-blueGray-700 mt-8"
                >
                  Check Notus JS!
                </a>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-pink-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-500 fill-current"
                      ></polygon>
                    </svg>

                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Assignment;
