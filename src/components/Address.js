import React from "react";

export default function Address(props) {
  const { city, streetName, country, countryCode } = props;

  return (
    <div>
      Address
      <br />
      <span>
        {city} - {streetName} - {country} - {countryCode}
      </span>
    </div>
  );
}
