const SurgerySchema = (Sequelize, DataTypes) => {
  const SurgeryTable = Sequelize.define('Surgery', {
    surgery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    specialty: DataTypes.STRING(50),
    doctor: DataTypes.STRING(50),
  }, {timestamps: false});

  return SurgeryTable;
};

module.exports = SurgerySchema;