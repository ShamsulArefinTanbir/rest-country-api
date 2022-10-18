import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area , population , name , region , flags} = props.country
    return (

        
        <div className='country'>
            <img src={flags.png}  />
            <h2>Country Name: {name.common} </h2>
            <h2>Population : {population}</h2>
            <h2>Area: {area}</h2>
            <h2>Region: {region}</h2>
          

        </div>

    );
};

export default Country;







