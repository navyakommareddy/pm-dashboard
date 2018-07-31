'use strict';
module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define('Invoice', {
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
    taskorderId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  },
    {
      freezeTableName: true
    }
  );
  Invoice.associate = function (models) {
    // Invoice.belongsTo(models.taskorder);
  };
  return Invoice;
};