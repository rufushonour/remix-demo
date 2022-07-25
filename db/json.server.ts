import fs from 'fs';

export interface Person {
  firstName: string;
  lastName: string;
  age: string;
}

interface IDb {
  people: Person[];
}

const FILE_NAME = './db/db.json';

function getDb() {
  const db: IDb = JSON.parse(fs.readFileSync(FILE_NAME, 'utf8'));

  console.log(db);
  return db;
}

function getPersonByName(firstName: string) {
  const db = getDb();
  return db.people.find(person => person.firstName === firstName);
}

function createPerson(person: Person) {
  const db = getDb();
  db.people.push(person);

  fs.writeFileSync(FILE_NAME, JSON.stringify(db));

  return person;
}

export { createPerson, getPersonByName }

