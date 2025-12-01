import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP get method
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,flags,capital");
};

// HTTP get method to get individual country data

export const getCountryIndvData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
