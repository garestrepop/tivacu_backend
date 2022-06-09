const Store = require('../../../../../lib/mongooseStore');
const laboratory = require('../../models/laboratory');

const db = new Store();

class Controller {
  constructor() {
    this.Laboratory = laboratory.Laboratory;
  }

  async list(filter) {
    const collection = await db.list(this.Laboratory, filter);
    return collection || [];
  }

  async findById(id) {
    const document = await db.findById(this.Laboratory, id);
    return document || {};
  }

  async create(data) {
    const documentCreated = await db.create(this.Laboratory, data);
    return documentCreated;
  }

  async update(id, data) {
    const documentUpdated = await db.update(this.Laboratory, id, data);
    return documentUpdated;
  }

  async delete(id) {
    const documentDeleted = await db.delete(this.Laboratory, id);
    return documentDeleted;
  }
}

module.exports = Controller;
