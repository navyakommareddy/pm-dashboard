'use strict';

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    Id: {
      type: DataTypes.UUID
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
      type: DataTypes.STRING
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
    subcontractor:{
      type:DataTypes.BOOLEAN
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },   
  {
    freezeTableName: true
  });
  Project.associate = function (models) {
    // Project.belongsTo(models.projectInvoice);
    Project.hasMany(models.ProjectInvoice);
    models.ProjectInvoice.belongsTo(Project);
  };
  return Project;
};