const express = require('express');
const response = require('../../../../../network/response');
const LaboratoryController = require('./controller');

const router = express.Router();

const laboratoryController = new LaboratoryController();

// CRUD

async function listLaboratory(req, res, next) {
  const filter = req.query || null;

  try {
    const listedcollection = await laboratoryController.list(filter);
    response.success(req, res, 'laboratory listed', 200, listedcollection);
  } catch (err) {
    next(err);
  }
}

async function findLaboratoryById(req, res, next) {
  const { id } = req.params;

  try {
    const documentRetrieved = await laboratoryController.findById(id);
    response.success(req, res, 'Laboratory retrieved', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function createLaboratory(req, res, next) {
  const data = req.body;

  try {
    const documentCreated = await laboratoryController.create(data);
    response.success(req, res, 'Laboratory created', 201, documentCreated);
  } catch (err) {
    next(err);
  }
}

async function updateLaboratory(req, res, next) {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedDocument = await laboratoryController.update(id, data);
    response.success(req, res, 'Laboratory updated', 200, updatedDocument);
  } catch (err) {
    next(err);
  }
}

async function deleteLaboratory(req, res, next) {
  const { id } = req.params;

  try {
    const deletedDocument = await laboratoryController.delete(id);
    response.success(req, res, 'Laboratory deleted', 200, deletedDocument);
  } catch (err) {
    next(err);
  }
}

router.get('/', listLaboratory);
router.get('/:id', findLaboratoryById);
router.post('/', createLaboratory);
router.patch('/:id', updateLaboratory);
router.delete('/:id', deleteLaboratory);

module.exports = router;
