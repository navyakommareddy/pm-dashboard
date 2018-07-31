'use strict';
module.exports = (sequelize, DataTypes) => {
  var Taskorder = sequelize.define('Taskorder', {
    Id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      trim: true
    },
    projectName: {
      type: DataTypes.STRING,
    },
    projectDesc: {
      type: DataTypes.TEXT,
    },
    clientName: {
      type: DataTypes.STRING,
    },
    totalBudget: {
      type: DataTypes.INTEGER,
    },
    startDate: {
      type: DataTypes.DATEONLY,
    },
    endDate: {
      type: DataTypes.DATEONLY,
    },
    projectManager: {
      type: DataTypes.STRING,
    },
    overheadRate: {
      type: DataTypes.STRING,
    },
    fixedorTM: {
      type: DataTypes.STRING,
    },
    clientType: {
      type: DataTypes.STRING,
    },
    contactName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    subcontractor: {
      type: DataTypes.BOOLEAN
    },
    mouId: {
      type: DataTypes.UUID,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
    {
      freezeTableName: true
    });
  Taskorder.associate = function (models) {
    // Taskorder.belongsTo(models.mou);
    Taskorder.hasMany(models.Invoice);
    models.Invoice.belongsTo(Taskorder);
  };
  return Taskorder;
};