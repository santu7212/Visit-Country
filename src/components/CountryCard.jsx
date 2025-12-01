 import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ curCountry }) => {
  const { flags, name, population, region, capital } = curCountry;
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(600px) rotateX(${y / 25}deg) rotateY(${x / 25}deg)`;
  };

  const resetTilt = () => {
    cardRef.current.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="flex justify-center animate-fade">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="
          h-[260px] w-[200px] rounded-xl p-3 flex flex-col justify-between relative overflow-hidden
          bg-gradient-to-t from-[#210c93] via-[#0d117a] to-[#07052e]
          shadow-[0_0_15px_rgba(59,130,246,0.4),0_0_25px_rgba(59,130,246,0.25)]
          transition duration-500
          hover:shadow-[0_0_22px_rgba(59,130,246,0.65),0_0_40px_rgba(59,130,246,0.45)]
          hover:-translate-y-2
        "
      >
    
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

       
        <img
          src={flags?.svg}
          alt={name?.common}
          className="w-full h-20 object-cover rounded-md"
        />
 
        <div className="mt-1 text-xs leading-tight space-y-[2px] text-white">
          <p className="font-bold text-sm">{name?.common}</p>
          <p>Population: {population?.toLocaleString("en-IN")}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital?.[0] || "N/A"}</p>
        </div>

         
        <NavLink to={`/country/${name?.common}`}>
          <button
            className="
              mt-2 w-full py-[6px] rounded-md text-xs font-bold tracking-wide
              bg-[#0d012f] text-blue-400 border border-blue-500
              shadow-[0_0_6px_#2563eb,0_0_12px_#2563eb]
              hover:shadow-[0_0_10px_#60a5fa,0_0_23px_#60a5fa]
              hover:text-white hover:border-blue-400
              transition active:scale-95
            "
          >
            READ MORE
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CountryCard;
