import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../API";

const CitySearch = ({ onSearchChange }) => {
  const [citySearch, setCitySearch] = useState("");

  const onChangeHandler = (searchData) => {
    setCitySearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=50000&namePrefix=${
        inputValue ? inputValue : "surat"
      }`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Enter a city"
      debounceTimeout={600}
      value={citySearch}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default CitySearch;
