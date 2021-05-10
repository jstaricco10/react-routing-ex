import faker from 'faker';

export function generateFriends() {
  let friends = [];

  for (let id = 1; id <= 100; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let avatar = faker.internet.avatar();

    friends.push({
      id,
      firstName,
      lastName,
      email,
      avatar,
    });
  }

  return { data: friends };
}

export function generateAddresses() {
  let addresses = [];

  for (let id = 1; id <= 100; id++) {
    let city = faker.address.city();
    let streetName = faker.address.streetName();
    let country = faker.address.country();
    let countryCode = faker.address.countryCode();

    addresses.push({
      id,
      city,
      streetName,
      country,
      countryCode,
    });
  }

  return { data: addresses };
}
