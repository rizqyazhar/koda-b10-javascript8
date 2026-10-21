const people = [
  { name: "John", time: 1500 },
  { name: "Ed", time: 2000 },
  { name: "Jane", time: 500 },
];

const antre = (person) => {
  return new Promise((resolve, reject) => {
    if (!person) return reject;
    setTimeout(() => {
      resolve(person.name);
    }, person.time);
  });
};

const person1 = await antre(people[0]).then(console.log).catch(console.log);
const person2 = await antre(people[1]).then(console.log).catch(console.log);
const person3 = await antre(people[2]).then(console.log).catch(console.log);
