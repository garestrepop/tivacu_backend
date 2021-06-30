const Store = require('../../../../../lib/mongooseStore');
const person = require('../../models/person');

const db = new Store();

class Controller {
  constructor() {
    this.Person = person.Person;
  }

  async list(filter) {
    const collection = await db.list(this.Person, filter);
    return collection || [];
  }

  async findById(id) {
    const document = await db.findById(this.Person, id);
    return document || {};
  }

  async create(data) {
    const documentCreated = await db.create(this.Person, data);
    return documentCreated;
  }

  async update(id, data) {
    const documentUpdated = await db.update(this.Person, id, data);
    return documentUpdated;
  }

  async delete(id) {
    const documentDeleted = await db.delete(this.Person, id);
    return documentDeleted;
  }

  async listVaccinesOfPersonById(id) {
    const documentRetrived = await db.populate(this.Person, { _id: id }, { path: '_vaccines', populate: { path: '_antigen' } });
    return documentRetrived;
  }

  async listVaccinesOfPersonByAtcCode(id, atcCode) {
    const documentRetrived = await db.populate(this.Person, { _id: id }, { path: '_vaccines', populate: { path: '_antigen', match: { atc_code: atcCode } } });
    return documentRetrived;
  }

  async listVaccinesOfPersonByAtcVaccineCode(id, atcVaccineCode) {
    const documentRetrived = await db.populate(this.Person, { _id: id }, { path: '_vaccines', populate: { path: '_antigen', match: { atc_vaccine_code: atcVaccineCode } } });
    return documentRetrived;
  }

  async listVaccinesOfPersonByAtcGroupCode(id, atcGroupCode) {
    const documentRetrived = await db.populate(this.Person, { _id: id }, { path: '_vaccines', populate: { path: '_antigen', match: { atc_group_code: atcGroupCode } } });
    return documentRetrived;
  }
}

module.exports = Controller;
