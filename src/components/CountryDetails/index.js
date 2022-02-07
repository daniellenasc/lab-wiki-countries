import { useParams } from "react-router-dom"; 

import coutriesData from "../../countries.json"


function CountryDetails(props) {

    const { countryId } = useParams();

    // Method .find() returns the first found matching element,
    // or `null` if no matching element is found.
    const foundCountry = coutriesData.find((oneCountry) => {
        return oneCountry === countryId;
    });

    return (
        <div>
            <img src={foundCountry.img} alt="country" />
            <h1> {foundCountry.name} </h1>
            <p>Capital {foundCountry.capital}</p>
            <p>Area {foundCountry.area}</p>
            <p>Borders <li>{foundCountry.borders}</li></p>
        </div>
    )





}