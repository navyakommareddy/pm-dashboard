'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectInvoice = sequelize.define('ProjectInvoice', {
    Id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      trim: true
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      trim: true
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      trim: true
    },
    invoiceAmt: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    projectId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
    {
      freezeTableName: true
    });
  ProjectInvoice.associate = function (models) {
    // ProjectInvoice.belongsTo(models.project);
  };
  return ProjectInvoice;
};