const PatientsServices = require('../services/PatientsServices');

const findPatientsAndPlans = async (_req, res) => {
  const patients = await PatientsServices.findPatientsAndPlans();
  res.status(200).json(patients);
};

const findPatientsAndSurgeries = async (_req, res) => {
  const patients = await PatientsServices.findPatientsAndSurgeries();
  res.status(200).json(patients);
};

module.exports = {
  findPatientsAndPlans,
  findPatientsAndSurgeries,
};