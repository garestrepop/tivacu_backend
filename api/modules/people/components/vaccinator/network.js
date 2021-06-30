const express = require('express');
const response = require('../../../../../network/response');
const VaccinatorController = require('./controller');

const router = express.Router();

const vaccinatorController = new VaccinatorController();

// CRUD

async function listVaccinator(req, res, next) {
  const filter = req.query || null;

  try {
    const listedcollection = await vaccinatorController.list(filter);
    response.success(req, res, 'Vaccinator listed', 200, listedcollection);
  } catch (err) {
    next(err);
  }
}

async function findVaccinatorById(req, res, next) {
  const { id } = req.params;

  try {
    const documentRetrieved = await vaccinatorController.findById(id);
    response.success(req, res, 'Vaccinator retrieved', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function createVaccinator(req, res, next) {
  const data = req.body;

  try {
    const documentCreated = await vaccinatorController.create(data);
    response.success(req, res, 'Vaccinator created', 201, documentCreated);
  } catch (err) {
    next(err);
  }
}

async function updateVaccinator(req, res, next) {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedDocument = await vaccinatorController.update(id, data);
    response.success(req, res, 'Vaccinator updated', 200, updatedDocument);
  } catch (err) {
    next(err);
  }
}

async function deleteVaccinator(req, res, next) {
  const { id } = req.params;

  try {
    const deletedDocument = await vaccinatorController.delete(id);
    response.success(req, res, 'Vaccinator deleted', 200, deletedDocument);
  } catch (err) {
    next(err);
  }
}

router.get('/', listVaccinator);
router.get('/:id', findVaccinatorById);
router.post('/', createVaccinator);
router.patch('/:id', updateVaccinator);
router.delete('/:id', deleteVaccinator);

module.exports = router;
