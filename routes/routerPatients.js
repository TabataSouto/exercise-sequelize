const express = require('express');
const PatientControllers =  require('../controllers/PatientsControllers')

const routerPatients = express.Router();

routerPatients.get('/plans', PatientControllers.findPatientsAndPlans);
routerPatients.get('/surgeries', PatientControllers.findPatientsAndSurgeries);

module.exports = routerPatients;