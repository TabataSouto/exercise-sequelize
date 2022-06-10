const PatientSurgerySchema = (Sequelize, DataTypes) => {
  const PatientSurgeryTable = Sequelize.define('PatientSurgery',
  {},
  {timestamps: false});

  PatientSurgeryTable.associate = (models) => {
    models.Patient.belongsToMany(models.Patient, {
      as: 'patients', // tabela de onde vem o id;
      through: PatientSurgeryTable, //tabela que vai usar o id como chave estrangeira;
      foreignKey: 'patient_id', // nome da coluna da tabela que trás o id como chave estrangeira;
      otherKey: 'surgery_id' // outra chave estrangeira que a tabela possui;
    });
    models.Surgery.belongsToMany(models.Surgery, {
      as: 'surgeries', // tabela de onde vem o id;
      through: PatientSurgeryTable, //tabela que vai usar o id como chave estrangeira;
      foreignKey: 'surgery_id', // nome da coluna da tabela que trás o id como chave estrangeira;
      otherKey: 'patient_id' // outra chave estrangeira que a tabela possui;
    });
  }

  return PatientSurgeryTable;
};

module.exports = PatientSurgerySchema;