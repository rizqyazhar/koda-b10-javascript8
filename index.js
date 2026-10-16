const people = [
  { name: "John", time: 1500 },
  { name: "Ed", time: 2000 },
  { name: "Jane", time: 500 },
];

const timer = (person) => {
  setTimeout(() => {
    console.log(person.name);
  }, person.time);
};

const antre = (person) => {
  return new Promise((resolve, reject) => {
    if (!person) return reject;
    resolve(person);
  });
};

for (let i = 0; i < people.length; i++) {
  antre(people[i]).then(timer).catch(console.log);
}
