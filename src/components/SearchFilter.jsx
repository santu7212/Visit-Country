 import React from "react";

const SearchFilter = ({
  search,
  filter,
  setSearch,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => setSearch(e.target.value);
  const handleSelectChange = (e) => setFilter(e.target.value);

  const sortCountries = (value) => {
    const sorted = [...countries].sort((a, b) =>
      value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );
    setCountries(sorted);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

      {/* Search Box */}
      <input
        type="text"
        placeholder="🔍 Search for a country..."
        value={search}
        onChange={handleInputChange}
        className="w-full md:w-[380px] px-5 py-3 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 placeholder-gray-500 shadow-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
      />

      {/* Sort Buttons - centered between search and filter */}
      <div className="flex gap-3">
        <button
          onClick={() => sortCountries("asc")}
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm shadow-md transition"
        >
          ⬆ Asc
        </button>
        <button
          onClick={() => sortCountries("desc")}
          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm shadow-md transition"
        >
          ⬇ Desc
        </button>
      </div>

      {/* Region Filter */}
      <select
        value={filter}
        onChange={handleSelectChange}
        className="w-full md:w-[220px] px-5 py-3 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg border border-gray-300 dark:border-gray-700 outline-none cursor-pointer focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="All">🌍 All Regions</option>
        <option value="Africa">🌴 Africa</option>
        <option value="Americas">🗽 Americas</option>
        <option value="Asia">🏯 Asia</option>
        <option value="Europe">🏰 Europe</option>
        <option value="Oceania">🏝 Oceania</option>
      </select>

    </section>
  );
};

export default SearchFilter;
