import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCityData } from "../../api/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState();

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetchCityData(inputValue);
      const options = response.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name} ${city.countryCode}`,
      }));

      return { options };
    } 
    catch (error) {
        console.error(error);
        return { options: [] };
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for city..."
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
