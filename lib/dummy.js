const db = {
  Person: [{
    id: '1',
    typeDocument: 'PA',
    idDocumentNumber: '63-3313141',
    nationality: 'Czech Republic',
    firstname: 'Minor',
    lastname: 'Petken',
    dateofbirth: '1979/03/19',
    placeofbirth: {
      iso3166Continent: 'EU',
      continentName: 'Europe',
      iso3166Country: 'CZ',
      countryName: 'Czech Republic',
      demonym: 'Czech Republic',
      iso3166Subdivision: 'CZ-20',
      subdivisionName: 'Bohemia central',
      zipCode: '26601',
      cityName: 'Beroun',
    },
    sex: 'M',
    rh: 'A+',
  }, {
    id: '2',
    typeDocument: 'CC',
    idDocumentNumber: '38-6109395',
    nationality: 'Italia',
    firstname: 'Vernice',
    lastname: 'Tuckwood',
    dateofbirth: '1986/03/13',
    placeofbirth: {
      iso3166Continent: 'EU',
      continentName: 'Europe',
      iso3166Country: 'IT',
      countryName: 'Italy',
      demonym: 'Italy',
      iso3166Subdivision: 'IT-72',
      subdivisionName: 'Campania',
      zipCode: '83100',
      cityName: 'Avellino',
    },
    sex: 'F',
    rh: 'O+',
  }, {
    id: '3',
    typeDocument: 'RC',
    idDocumentNumber: '69-3519648',
    nationality: 'Argentina',
    firstname: 'Jada',
    lastname: 'Oxx',
    dateofbirth: '2018/11/29',
    placeofbirth: {
      iso3166Continent: 'SA',
      continentName: 'South America',
      iso3166Country: 'AR',
      countryName: 'Argentina',
      demonym: 'bonaerense',
      iso3166Subdivision: 'AR-B',
      subdivisionName: 'Provincia de Buenos Aires',
      zipCode: '1900',
      cityName: 'La Plata',
    },
    sex: 'F',
    rh: 'B-',
  }],
  ContactInformation: [{
    placeResidence: {
      iso3166Continent: 'SA',
      continentName: 'South America',
      iso3166Country: 'AR',
      countryName: 'Argentina',
      demonym: 'bonaerense',
      iso3166Subdivision: 'AR-B',
      subdivisionName: 'Provincia de Buenos Aires',
      zipCode: '1900',
      cityName: 'La Plata',
    },
    ressidentAddress: 'CLL 13 45 66',
    ressidentPhone: '7653445',
    personalEmail: 'jada.correo@correo.com',
    placeOffice: {
      iso3166Continent: 'SA',
      continentName: 'South America',
      iso3166Country: 'AR',
      countryName: 'Argentina',
      demonym: 'bonaerense',
      iso3166Subdivision: 'AR-B',
      subdivisionName: 'Provincia de Buenos Aires',
      zipCode: '1900',
      cityName: 'La Plata',
    },
    officeAddress: 'none',
    officePhone: 'none',
    officeEmail: 'none',
    movilPhone: '3444445643',
    share: true,
  },
  ],
};

function listCollection(table) {
  return db[table];
}

function getDocument(table, id) {
  const dbTable = listCollection(table);
  return dbTable.find((item) => item.id === id) || null;
}

function upsertDocument(table, data) {
  db[table].push(data);
  return true;
}

function deleteDocument(table, id) {
  db[table].splice(db[table].findIndex((item) => item.id === id), 1);
  return true;
}

module.exports = {
  listCollection,
  getDocument,
  upsertDocument,
  deleteDocument,
};
