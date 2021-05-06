import React, { useState } from "react";
import faker from "faker";

import { Link } from "react-router-dom";

function generateAddresses() {
  let addresses = [];

  for (let id = 1; id <= 100; id++) {
    let city = faker.address.city();
    let streetName = faker.address.streetName();
    let country = faker.address.country();

    addresses.push({
      id,
      city,
      streetName,
      country,
    });
  }

  return { data: addresses };
}

export default function Addresses() {
  const [addresses, setAddresses] = useState(generateAddresses().data);

  return (
    <div>
      {addresses.map((address) => (
        <div>
          <span>
            {address.id} - {address.city} - {address.streetName} -
            {address.country}
          </span>
        </div>
      ))}
    </div>
  );
}
