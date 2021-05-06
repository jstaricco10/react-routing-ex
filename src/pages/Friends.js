import React, { useState } from "react";

import faker from "faker";

import { Link } from "react-router-dom";

function generateFriends() {
  let friends = [];

  for (let id = 1; id <= 100; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    friends.push({
      id,
      firstName,
      lastName,
      email,
    });
  }

  return { data: friends };
}

export default function Friends() {
  const [friends, setFriends] = useState(generateFriends().data);

  return (
    <div>
      {friends.map((friend) => (
        <div>
          <span>
            {friend.id} - {friend.firstName} - {friend.lastName} -{" "}
            {friend.email}
          </span>
        </div>
      ))}
    </div>
  );
}
