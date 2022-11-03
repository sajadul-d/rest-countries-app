import React from 'react';
import './Country.css';
const Country = (props) => {
  const { population, area, name, region, flags } = props.country;
  return (
    <div className="country">
      <h1>Name: {name.common}</h1>
      <img src={flags.png} alt="this country" />
      <h3>Region: {region}</h3>
      <h3>Area: {area}</h3>
      <h3>Population: {population}</h3>
      {/* <h1>Name: {props.name}</h1>
      <h3>Population: {props.population}</h3>
      <h3>Area: {props.area}</h3>
      <h3>Region: {props.region}</h3> */}
    </div>
  );
};

export default Country;
