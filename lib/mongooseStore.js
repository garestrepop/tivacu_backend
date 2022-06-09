/* eslint-disable max-len */
class Store {
  async list(Model, filter) {
    this.filter = filter;
    let query = {};
    if (filter != null) {
      query = filter;
    }
    const listed = await Model.find(query);
    return listed;
  }

  async findById(Model, id) {
    this.id = id;
    const document = await Model.findById(id);
    return document;
  }

  async findSelectById(Model, id, select) {
    this.id = id;
    this.select = select;
    const document = await Model.find({ _id: id }, select);
    return document;
  }

  async create(Model, data) {
    this.data = data;
    const newDocument = new Model(data);
    const created = await newDocument.save();
    return created;
  }

  async update(Model, id, data) {
    this.id = id;
    this.data = data;
    const updated = await Model.findByIdAndUpdate(id, data, { timestamps: true, new: true });
    return updated;
  }

  async delete(Model, id) {
    this.id = id;
    const deleted = await Model.findByIdAndDelete(id);
    return deleted;
  }

  async populate(Model, filter, columns) {
    this.filter = filter;
    this.columns = columns;
    const populated = await Model.find(filter).populate(columns);
    return populated;
  }

  async push(Model, id, data) {
    this.id = id;
    this.data = data;
    const updated = await Model.findByIdAndUpdate(id, { $push: data }, { timestamps: true, new: true });
    return updated;
  }
}

module.exports = Store;
