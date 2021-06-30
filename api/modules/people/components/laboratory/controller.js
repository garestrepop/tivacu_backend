const Store = require('../../../../../lib/mongooseStore');
const laboratory = require('../../models/laboratory');

const db = new Store();

class Controller {
  constructor() {
    this.Vaccinator = laboratory.Laboratory;
  }

  async list(filter) {
    const collection = await db.list(this.Vaccinator, filter);
    return collection || [];
  }

  async findById(id) {
    const document = await db.findById(this.Vaccinator, id);
    return document || {};
  }

  async create(data) {
    const documentCreated = await db.create(this.Vaccinator, data);
    return documentCreated;
  }

  async update(id, data) {
    const documentUpdated = await db.update(this.Vaccinator, id, data);
    return documentUpdated;
  }

  async delete(id) {
    const documentDeleted = await db.delete(this.Vaccinator, id);
    return documentDeleted;
  }
}

module.exports = Controller;
