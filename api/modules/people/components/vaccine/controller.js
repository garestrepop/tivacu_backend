/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
const Store = require('../../../../../lib/mongooseStore');
const vaccine = require('../../models/vaccine');
const person = require('../../models/person');

const db = new Store();

class Controller {
  constructor() {
    this.Vaccine = vaccine.Vaccine;
    this.Person = person.Person;
  }

  async list(filter) {
    const collection = await db.list(this.Vaccine, filter);
    return collection || [];
  }

  async findById(id) {
    const document = await db.findById(this.Vaccine, id);
    return document || {};
  }

  async create(data) {
    const newDocument = await db.create(this.Vaccine, data);
    await db.push(this.Person, newDocument._person, { _vaccines: newDocument._id });
    return newDocument;
  }

  async update(id, data) {
    const documentUpdated = await db.update(this.Vaccine, id, data);
    return documentUpdated;
  }

  async delete(id) {
    const documentDeleted = await db.delete(this.Vaccine, id);
    return documentDeleted;
  }

  /* -- Por regla de negocio siempre se debe insertar una nueva vacuna,  entrada por el metodo Create.
  async addVaccineToPerson (id, idPerson) {
    const documentAdd = await db.update(this.Person, idPerson, { _vaccines: id })
    return documentAdd
  }
  */
}

module.exports = Controller;
