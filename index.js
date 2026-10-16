const people = [
  { name: "John", time: 1500 },
  { name: "Ed", time: 2000 },
  { name: "Jane", time: 500 },
];

const timer = (person) => {
  console.log(person.name);
};

const antre = (person) => {
  return new Promise((resolve, reject) => {
    if (!person) return reject;
    setTimeout(() => {
      resolve(person.name);
    }, person.time);
  });
};

for (let i = 0; i < people.length; i++) {
  antre(people[i]).then(console.log).catch(console.log);
}
