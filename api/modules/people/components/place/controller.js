const Store = require('../../../../../lib/mongooseStore');
const place = require('../../models/place');

const db = new Store();

class Controller {
  constructor() {
    this.Place = place.Place;
  }

  async list(filter) {
    const collection = await db.list(this.Place, filter);
    return collection || [];
  }

  async findById(id) {
    const document = await db.findById(this.Place, id);
    return document || {};
  }

  async create(data) {
    const documentCreated = await db.create(this.Place, data);
    return documentCreated;
  }

  async update(id, data) {
    const documentUpdated = await db.update(this.Place, id, data);
    return documentUpdated;
  }

  async delete(id) {
    const documentDeleted = await db.delete(this.Place, id);
    return documentDeleted;
  }
}

module.exports = Controller;
