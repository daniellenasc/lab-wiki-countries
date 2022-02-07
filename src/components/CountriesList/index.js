import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function CountriesList(props) {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(props.countries);
    }, [props.countries]);

    return (
        <div>
            {countries.map((country) => {
                return (
                    <div>
                        <img src="" />
                        <Link to={`/countries/${country.name}`}> {country.name} </Link>
                    </div>
                )
            })}
        </div>
    )

}

export default CountriesList