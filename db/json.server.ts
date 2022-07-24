import fs from 'fs';
import databaseJson from './db.json';

export interface Person {
  firstName: string;
  lastName: string;
  age: string;
}

interface IDb {
  people: Person[];
}

const db: IDb = databaseJson;

function getPersonByName(firstName: string) {
  return db.people.find(person => person.firstName === firstName);
}

function createPerson(person: Person) {
  db.people.push(person);

  fs.writeFileSync('./db.json', JSON.stringify(db));

  return person;
}

export { createPerson, getPersonByName }

