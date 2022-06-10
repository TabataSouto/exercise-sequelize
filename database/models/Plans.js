const PlanSchema = (Sequelize, DataTypes) => {
  const PlanTable = Sequelize.define('Plan', {
    plan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  }, {timestamps: false});

  PlanTable.associate = (models) => {
    PlanTable.hasMany(models.Patient,
      { foreignKey: 'plan_id', as: 'patients' });
  };

  return PlanTable;
};

module.exports = PlanSchema;