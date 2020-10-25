var faker = require('faker');

var database = { machines: [], components: []};

for (var i = 1; i<= 100; i++) {
  database.machines.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    lastDateMaintenance: faker.date.recent(),
    state: faker.random.boolean()
  });

  database.components.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    machineId: i,
    comments: faker.lorem.paragraphs()
  });
}

console.log(JSON.stringify(database));