 import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="py-20 bg-[#0B1120] text-white">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-5xl font-extrabold leading-tight mb-14">
        Here are the Interesting Facts
        <br />
        <span className="text-blue-500">we're proud of</span>
      </h2>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {countryFacts.map((curCountry) => {
          const { id, countryName, capital, population, interestingFact } =
            curCountry;

          return (
            <div key={id} className="group">
              {/* Outer wrapper — glow only on hover */}
              <div className="p-[2px] rounded-2xl bg-transparent transition-all duration-300
                group-hover:bg-gradient-to-br group-hover:from-fuchsia-500 group-hover:to-indigo-600
                group-hover:shadow-[0_0_35px_rgba(211,49,255,0.45)]
              ">
                {/* Inner card */}
                <div className="bg-[#1A1526] rounded-xl p-6 h-full transition-all duration-300
                  group-hover:scale-[0.98] group-hover:rounded-2xl cursor-pointer
                ">
                  <p className="text-xl font-bold text-center text-blue-400 mb-4">
                    {countryName}
                  </p>

                  <p className="text-gray-300 text-sm mb-2">
                    <span className="text-white font-semibold">Capital: </span>
                    {capital}
                  </p>

                  <p className="text-gray-300 text-sm mb-2">
                    <span className="text-white font-semibold">Population: </span>
                    {population}
                  </p>

                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-semibold">Interesting Facts: </span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default About;
