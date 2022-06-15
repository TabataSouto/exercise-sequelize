const PatientSurgerySchema = (Sequelize, DataTypes) => {
  const PatientSurgeryTable = Sequelize.define('PatientSurgery',
    {
      // patient_id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      // },
      // surgery_id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      // }
  },
  {timestamps: false, tableName: 'Patient_surgeries' });

  PatientSurgeryTable.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, { // paciente pode pertencer a muitas cirúrgias;
      as: 'surgeries', // tabela de onde vem o id;
      through: PatientSurgeryTable, //tabela que vai usar o id como chave estrangeira;
      foreignKey: 'patient_id', // chave estrangeira da coluna que está sendo associada (patient); // primeira parte do associate
      otherKey: 'surgery_id' // primary key de surgery que é a pertencente // segunda parte do associate
    });
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients', // tabela de onde vem o id;
      through: PatientSurgeryTable, //tabela que vai usar o id como chave estrangeira;
      foreignKey: 'surgery_id', // nome da coluna da tabela que trás o id como chave estrangeira;
      otherKey: 'patient_id' // outra chave estrangeira que a tabela possui;
    });
  }

  return PatientSurgeryTable;
};

module.exports = PatientSurgerySchema;