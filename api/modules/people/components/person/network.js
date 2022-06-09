/* eslint-disable max-len */
const express = require('express');
const response = require('../../../../../network/response');
const PersonController = require('./controller');

const router = express.Router();

const personController = new PersonController();

async function listPeople(req, res, next) {
  const filter = req.query || null;
  try {
    const collectionListed = await personController.list(filter);
    response.success(req, res, 'People listed', 200, collectionListed);
  } catch (err) {
    next(err);
  }
}

async function findPersonById(req, res, next) {
  const { id } = req.params;

  try {
    const documentRetrieved = await personController.findById(id);
    response.success(req, res, 'Person retrieved', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function createPerson(req, res, next) {
  const data = req.body;

  try {
    const documentCreated = await personController.create(data);
    response.success(req, res, 'Person created', 201, documentCreated);
  } catch (err) {
    next(err);
  }
}

async function updatePerson(req, res, next) {
  const { id } = req.params;
  const data = req.body;

  try {
    const documentUpdated = await personController.update(id, data);
    response.success(req, res, 'Person updated', 200, documentUpdated);
  } catch (err) {
    next(err);
  }
}

async function deletePerson(req, res, next) {
  const { id } = req.params;

  try {
    const documentDeleted = await personController.delete(id);
    response.success(req, res, 'Person deleted', 200, documentDeleted);
  } catch (err) {
    next(err);
  }
}

async function listVaccinesOfPersonById(req, res, next) {
  const { id } = req.params;

  try {
    const documentRetrieved = await personController.listVaccinesOfPersonById(id);
    response.success(req, res, 'Vaccines of Person', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function listVaccinesOfPersonByAtcCode(req, res, next) {
  const { id } = req.params;
  const atcCode = req.query.atc_code;

  try {
    const documentRetrieved = await personController.listVaccinesOfPersonByAtcCode(id, atcCode);
    response.success(req, res, 'Vaccines of Person', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function listVaccinesOfPersonByAtcVaccineCode(req, res, next) {
  const { id } = req.params;
  const atcVaccineCode = req.query.atc_vaccine_code;

  try {
    const documentRetrieved = await personController.listVaccinesOfPersonByAtcVaccineCode(id, atcVaccineCode);
    response.success(req, res, 'Vaccines of Person', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function listVaccinesOfPersonByAtcGroupCode(req, res, next) {
  const { id } = req.params;
  const atcGroupCode = req.query.atc_group_code;

  try {
    const documentRetrieved = await personController.listVaccinesOfPersonByAtcGroupCode(id, atcGroupCode);
    response.success(req, res, 'Vaccines of Person', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function listContactInformation(req, res, next) {
  const { id } = req.params;

  try {
    const documentRetrieved = await personController.listContactInformation(id);
    response.success(req, res, 'Contact Information retrieved', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

async function listAssitanceInformation(req, res, next) {
  const { id } = req.params;

  try {
    const documentRetrieved = await personController.listAssitanceInformation(id);
    response.success(req, res, 'Assitance Information retrieved', 200, documentRetrieved);
  } catch (err) {
    next(err);
  }
}

router.get('/', listPeople);
router.get('/:id', findPersonById);
router.get('/contactInformation/:id', listContactInformation);
router.get('/assitanceInformation/:id', listAssitanceInformation);
router.get('/vaccines/:id', listVaccinesOfPersonById);
router.get('/vaccines/atccode/:id', listVaccinesOfPersonByAtcCode);
router.get('/vaccines/atcvaccinecode/:id', listVaccinesOfPersonByAtcVaccineCode);
router.get('/vaccines/atcgroupcode/:id', listVaccinesOfPersonByAtcGroupCode);
router.post('/', createPerson);
router.patch('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;
