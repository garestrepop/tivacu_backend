const express = require('express');
const response = require('../../../../../network/response');
const VaccineController = require('./controller');

const router = express.Router();

const vaccineController = new VaccineController();

// CRUD

async function listVaccine(req, res, next) {
  const filter = req.query || null;

  try {
    const listedcollection = await vaccineController.list(filter);
    response.success(req, res, 'Vaccines listed', 200, listedcollection);
  } catch (err) {
    next(err);
  }
}

async function findVaccineById(req, res, next) {
  const { id } = req.params;

  try {
    const documentRetrieved = await vaccineController.findById(id);
    response.success(req, res, 'Vaccine retrieved', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function createVaccine(req, res, next) {
  const data = req.body;

  try {
    const documentCreated = await vaccineController.create(data);
    response.success(req, res, 'Vaccine created', 201, documentCreated);
  } catch (err) {
    next(err);
  }
}

async function updateVaccine(req, res, next) {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedDocument = await vaccineController.update(id, data);
    response.success(req, res, 'Vaccine updated', 200, updatedDocument);
  } catch (err) {
    next(err);
  }
}

async function deleteVaccine(req, res, next) {
  const { id } = req.params;

  try {
    const deletedDocument = await vaccineController.delete(id);
    response.success(req, res, 'Vaccine deleted', 200, deletedDocument);
  } catch (err) {
    next(err);
  }
}

router.get('/', listVaccine);
router.get('/:id', findVaccineById);
router.post('/', createVaccine);
router.patch('/:id', updateVaccine);
router.delete('/:id', deleteVaccine);

module.exports = router;
