import React, { useEffect, useState, useTransition } from "react";
import Loading from "./Loading";
import { getCountryData } from "../api/postApi";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // getCountryData()
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res.data);
      setCountries(res.data);
    });
  }, []);
  console.log(search, filter);

  if (isPending) return <Loading />;
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    } else {
      return country;
    }
  };

  const filterRegionCountry=(country)=>{
    if(filter==="All"){
      return country
    }else{
      return country.region===filter
    }
  }

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegionCountry(country)
  );
  return (
    <section className="bg-[#0B1120] text-white py-10">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul
        className="max-w-7xl mx-auto px-6 lg:px-12 
                 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                 gap-6"
      >
        {filterCountries.map((curCountry, index) => (
          <CountryCard curCountry={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
