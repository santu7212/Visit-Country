 import React, { useEffect, useState, useTransition } from "react";
import Loader from "../pages/Loading";
import { getCountryIndvData } from "../api/postApi";
import { NavLink, useParams } from "react-router-dom";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  // Fetch country data
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndvData(params.id);
      setCountry(res.data[0]);
    });
  }, [params.id]);

  // 🔥 Scroll to top when visiting this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isPending || !country) return <Loader />;

  return (
    <section className="bg-[#0B1120] min-h-screen text-white py-14 px-6">
      <div
        className="max-w-5xl mx-auto p-10 rounded-3xl backdrop-blur-xl 
        bg-[#0f172a]/60 border border-white/10 shadow-[0_0_50px_rgba(0,140,255,0.3)]
        flex flex-col gap-10 transition-all"
      >
         
        <NavLink to="/country">
          <button
            className="px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide 
            bg-white/5 text-gray-300 border border-white/10
            hover:bg-white hover:text-black hover:border-white
            transition-all duration-200 active:scale-95"
          >
            ← Back
          </button>
        </NavLink>

        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
           
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full max-w-[420px] rounded-xl shadow-xl 
            hover:scale-[1.03] transition-transform duration-300"
          />

          
          <div className="space-y-5 text-base leading-relaxed w-full">
            <h2 className="text-4xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {country.name.official}
            </h2>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p><span className="font-semibold text-blue-400">Native name:</span><br />
                {Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ")}
              </p>

              <p><span className="font-semibold text-blue-400">Population:</span><br />
                {country.population.toLocaleString()}
              </p>

              <p><span className="font-semibold text-blue-400">Region:</span><br />
                {country.region}
              </p>

              <p><span className="font-semibold text-blue-400">Sub Region:</span><br />
                {country.subregion}
              </p>

              <p><span className="font-semibold text-blue-400">Capital:</span><br />
                {country.capital}
              </p>

              <p><span className="font-semibold text-blue-400">Top Level Domain:</span><br />
                {country.tld[0]}
              </p>

              <p><span className="font-semibold text-blue-400">Currencies:</span><br />
                {Object.keys(country.currencies)
                  .map((curElem) => country.currencies[curElem].name)
                  .join(", ")}
              </p>

              <p><span className="font-semibold text-blue-400">Languages:</span><br />
                {Object.keys(country.languages)
                  .map((key) => country.languages[key])
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
