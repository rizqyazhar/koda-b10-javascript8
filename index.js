const people = [
  {
    name: "John",
    time: 1500,
  },
  {
    name: "Ed",
    time: 2000,
  },
  {
    name: "Jane",
    time: 500,
  },
];

const antre = (person) => {
  return new Promise((resolve, reject) => {
    if (!person) return reject;
    setTimeout(() => {
      resolve(person.name);
    }, person.time);
  });
};

const person1 = people[0];
const person2 = people[1];
const person3 = people[2];

antre(person1)
  .then((person1) => {
    console.log(person1);
    return antre(person2);
  })
  .then((person2) => {
    console.log(person2);
    return antre(person3);
  })
  .then((person3) => {
    console.log(person3);
  })
  .catch(console.log);
