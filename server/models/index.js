'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve('./server/config/secrets.json'))[env];

let models = {};

function getModels(force = false) {
  if (Object.keys(models).length && !force) {
    return models;
  }

  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }

  let modules = [
    require('./invoice.js'),
    require('./mou.js'),
    require('./project.js'),
    require('./projectInvoice.js'),
    require('./taskorder.js')
  ];

  // Initialize models
  modules.forEach((module) => {
    const model = module(sequelize, Sequelize, config);
    models[model.name] = model;
  });

  // Apply associations
  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  return models;
}

module.exports = {
  getModels
};
