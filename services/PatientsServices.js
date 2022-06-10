const { Op } = require('sequelize');
const { Patient, Plan, Surgery } = require('../database/models');

const findPatientsAndPlans = async () => {
	const patients = await Patient.findAll({
		include: [
			{
				model: Plan, // model de onde vem a informação da outra tabela;
				as: 'plans',
				// attributes: ['coverage'], // trás apenas a coluna/chave correspondente;
			}
		],
		// attributes: [ 'fullName' ], // 
		// where: { // trás a informação apenas do paciente informado em Op.and;
		// 	[Op.and]: [ { fullName: 'Alberto Dos Santos' } ],
		// }
	});
	return patients;
};

const findPatientsAndSurgeries = async () => {
	const patients = await Patient.findAll(
		{
		include:{
				model: Surgery,
				as: 'surgeries',
				through: { attributes: [] },
			},
	});
	return patients;
} ;

module.exports = {
	findPatientsAndPlans,
	findPatientsAndSurgeries,
};
