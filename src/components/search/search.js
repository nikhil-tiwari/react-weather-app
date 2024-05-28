import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { fetchCityData } from "../../api/api"

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState();

    const handleOnChange  = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions = async (inputValue) => {
        return await fetchCityData(inputValue)
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}` ,
                            label: `${city.name} ${city.countryCode}` ,
                        }
                    })
                }
            })
            .catch((error) => console.log(error));
    }

    return (
        <AsyncPaginate 
            placeholder="Search for city..."
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;