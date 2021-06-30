const express = require('express');
const response = require('../../../../../network/response');
const AntigenController = require('./controller');

const antigenController = new AntigenController();

const router = express.Router();

// CRUD

async function listAntigen(req, res, next) {
  const filter = req.query || null;

  try {
    const listedcollection = await antigenController.list(filter);
    response.success(req, res, 'Antigens listed', 200, listedcollection);
  } catch (err) {
    next(err);
  }
}

async function findAntigenById(req, res, next) {
  const { id } = req.params;

  try {
    const documentRetrieved = await antigenController.findById(id);
    response.success(req, res, 'Antigen retrieved', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function createAntigen(req, res, next) {
  const data = req.body;

  try {
    const documentCreated = await antigenController.create(data);
    response.success(req, res, 'Antigen created', 201, documentCreated);
  } catch (err) {
    next(err);
  }
}

async function updateAntigen(req, res, next) {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedDocument = await antigenController.update(id, data);
    response.success(req, res, 'Antigen updated', 200, updatedDocument);
  } catch (err) {
    next(err);
  }
}

async function deleteAntigen(req, res, next) {
  const { id } = req.params;

  try {
    const deletedDocument = await antigenController.delete(id);
    response.success(req, res, 'Antigen deleted', 200, deletedDocument);
  } catch (err) {
    next(err);
  }
}

router.get('/', listAntigen);
router.get('/:id', findAntigenById);
router.post('/', createAntigen);
router.patch('/:id', updateAntigen);
router.delete('/:id', deleteAntigen);

module.exports = router;
