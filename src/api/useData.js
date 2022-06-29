import { useQuery } from "react-query";

const fetchData = async (type) => {
  return fetch(`http://country.io/${type}.json`).then((res) => res.json());
};

const fetchCountryData = async () => {
  const namesData = await fetchData("names");
  const capitalData = await fetchData("capital");
  const phoneCodesData = await fetchData("phone");
  const currencyData = await fetchData("currency");

  return Object.entries(namesData).map(([key, value]) => ({
    id: key,
    name: value,
    capital: capitalData[key],
    phone: phoneCodesData[key],
    currency: currencyData[key],
  }));
};

export const useData = () => {
  return useQuery("countries", fetchCountryData);
};
