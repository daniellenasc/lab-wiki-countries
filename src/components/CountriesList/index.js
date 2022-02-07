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
                        <ul>
                            <img src={`${country.alpha2Code}`} alt="country" />
                            <Link to={`/${country.alpha3Code}`}> {country.name} </Link>
                        </ul>
                    </div>
                )
            })}
        </div>
    )

}

export default CountriesList