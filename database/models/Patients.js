const PatientSchema = (Sequelize, DataTypes) => {
  const PatientTable = Sequelize.define('Patient', {
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: DataTypes.STRING(50),
    plan_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  }, {timestamps: false}
  // { tableName: 'Patients'
);

  PatientTable.associate = (models) => {
    PatientTable.belongsTo(models.Plan,
      { foreignKey: 'plan_id', as: 'plans' });
  };

  return PatientTable;
};

module.exports = PatientSchema;