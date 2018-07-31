'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mou = sequelize.define('Mou', {
    Id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      trim: true
    },
    startDate: {
      type: DataTypes.DATEONLY,
    },
    endDate: {
      type: DataTypes.DATEONLY,
    },
    mouValue: {
      type: DataTypes.FLOAT,
      allowNull: true,
      trim: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    freezeTableName: true
  }
  );
  Mou.associate = function (models) {
    // Mou.belongsTo(models.taskorder);
    Mou.hasMany(models.Taskorder);
    models.Taskorder.belongsTo(Mou);
  };
  return Mou;
};