var faker = require('faker');

var database = { machines: []};

for (var i = 1; i<= 100; i++) {
  database.machines.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    lastDateMaintenance: faker.date.recent(),
    state: faker.random.boolean()
  });
}

console.log(JSON.stringify(database));