const express = require('express');
const response = require('../../../../../network/response');
const PlaceController = require('./controller');

const router = express.Router();

const placeController = new PlaceController();

// CRUD

async function listPlaces(req, res, next) {
  const filter = req.query || null;

  try {
    const listedcollection = await placeController.list(filter);
    response.success(req, res, 'Places listed', 200, listedcollection);
  } catch (err) {
    next(err);
  }
}

async function findPlaceById(req, res, next) {
  const { id } = req.params;

  try {
    const documentRetrieved = await placeController.findById(id);
    response.success(req, res, 'Place retrieved', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function createPlace(req, res, next) {
  const data = req.body;

  try {
    const documentCreated = await placeController.create(data);
    response.success(req, res, 'Place created', 201, documentCreated);
  } catch (err) {
    next(err);
  }
}

async function updatePlace(req, res, next) {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedDocument = await placeController.update(id, data);
    response.success(req, res, 'Place updated', 200, updatedDocument);
  } catch (err) {
    next(err);
  }
}

async function deletePlace(req, res, next) {
  const { id } = req.params;

  try {
    const deletedDocument = await placeController.delete(id);
    response.success(req, res, 'Place deleted', 200, deletedDocument);
  } catch (err) {
    next(err);
  }
}

router.get('/', listPlaces);
router.get('/:id', findPlaceById);
router.post('/', createPlace);
router.patch('/:id', updatePlace);
router.delete('/:id', deletePlace);

module.exports = router;
