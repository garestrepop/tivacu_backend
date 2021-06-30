const swaggerUi = require('swagger-ui-express');
const response = require('./response');

const jwtCheck = require('../utils/middleware/auth0');

const swaggerDoc = require('../api/swagger.json');

const peopleAntigenApi = require('../api/modules/people/components/antigen/network');
const peoplePersonApi = require('../api/modules/people/components/person/network');
const peopleVaccineApi = require('../api/modules/people/components/vaccine/network');

const routes = (app) => {
  // DOC
  app.use('/api/v0/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

  app.get('/api/v0/landingpage', (req, res, next) => {
    try {
      response.success(req, res, 'Landing Page', 200, '');
    } catch (error) {
      next(error);
    }
  });

  // AUTH
  app.use(jwtCheck);

  // Aquirir un nuevo access token
  app.get('/api/v0/authenticate', (req, res, next) => {
    try {
      response.success(req, res, 'Welcome to tivacu api', 200, '');
    } catch (error) {
      next(error);
    }
  });

  // API
  // People Module
  app.use('/api/v0/antigen', peopleAntigenApi);
  app.use('/api/v0/person', peoplePersonApi);
  app.use('/api/v0/vaccine', peopleVaccineApi);
};

module.exports = routes;
