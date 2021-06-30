const Store = require('../../../../../lib/mongooseStore');
const antigen = require('../../models/antigen');

const db = new Store();

class Controller {
  constructor() {
    this.Antigen = antigen.Antigen;
  }

  async list(filter) {
    const collection = await db.list(this.Antigen, filter);
    return collection || [];
  }

  async findById(id) {
    const document = await db.findById(this.Antigen, id);
    return document || {};
  }

  async create(data) {
    const documentCreated = await db.create(this.Antigen, data);
    return documentCreated;
  }

  async update(id, data) {
    const documentUpdated = await db.update(this.Antigen, id, data);
    return documentUpdated;
  }

  async delete(id) {
    const documentDeleted = await db.delete(this.Antigen, id);
    return documentDeleted;
  }
}

module.exports = Controller;
