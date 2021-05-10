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

export function generateQuery(objToQuery, url) {
  const { id, ...objToQueryNoId } = objToQuery;
  let query = `${url}/${id}?`;
  let keys = Object.keys(objToQueryNoId);
  const len = keys.length;
  Object.entries(objToQueryNoId).map(
    (key) => (query += `${key[0]}=${key[1]}&`)
  );
  console.log(query);
  if (len > 0) query = query.slice(0, -1);
  return query;
}
