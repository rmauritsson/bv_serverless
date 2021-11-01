import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";

const VolunteersAvailable = () => {
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
      <Intro />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  );
};

export default VolunteersAvailable;
