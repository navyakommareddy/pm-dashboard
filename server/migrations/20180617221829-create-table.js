'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Project', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        trim: true
      },
      projectName: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
      },
      projectDesc: {
        type: Sequelize.TEXT,
        allowNull: false,
        trim: true
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
      },
      totalBudget: {
        type: Sequelize.INTEGER,
        allowNull: false,
        trim: true
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        trim: true
      },
      endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        trim: true
      },
      projectManager: {
        type: Sequelize.STRING,
        allowNull: true,
        trim: true
      },
      overheadRate: {
        type: Sequelize.STRING
      },
      fixedorTM: {
        type: Sequelize.STRING,
        allowNull: true,
        trim: true
      },
      clientType: {
        type: Sequelize.STRING,
        allowNull: true,
        trim: true
      },
      contactName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [10, 10],
          not: ["[a-z]", 'i']
        }
      },
      subcontractor: {
        type: Sequelize.BOOLEAN
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    }).then(() => queryInterface.createTable('ProjectInvoice', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        trim: true
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        trim: true
      },
      endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        trim: true
      },
      invoiceAmt: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      paid: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      projectId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: 'Project',
          key: 'Id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }
    )).then(() => queryInterface.createTable('Mou', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        trim: true
      },
      startDate: {
        type: Sequelize.DATEONLY,
      },
      endDate: {
        type: Sequelize.DATEONLY,
      },
      mouValue: {
        type: Sequelize.FLOAT,
        allowNull: true,
        trim: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }
    )).then(() => queryInterface.createTable('Taskorder', {
      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        trim: true
      },
      projectName: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
      },
      projectDesc: {
        type: Sequelize.TEXT,
        allowNull: false,
        trim: true
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
      },
      totalBudget: {
        type: Sequelize.INTEGER,
        allowNull: false,
        trim: true
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        trim: true
      },
      endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        trim: true
      },
      projectManager: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
      },
      overheadRate: {
        type: Sequelize.STRING
      },
      fixedorTM: {
        type: Sequelize.STRING,
        allowNull: true,
        trim: true
      },
      clientType: {
        type: Sequelize.STRING,
        allowNull: false,
        trim: true
      },
      contactName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [10, 10],
          not: ["[a-z]", 'i']
        }
      },
      subcontractor: {
        type: Sequelize.BOOLEAN
      },
      mouId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: 'Mou',
          key: 'Id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })).then(() => queryInterface.createTable('Invoice', {

      Id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        trim: true
      },
      startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        trim: true
      },
      endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        trim: true
      },
      invoiceAmt: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      paid: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      taskorderId: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: 'Taskorder',
          key: 'Id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProjectInvoice')
      .then(() => queryInterface.dropTable('Project'))
      .then(() => queryInterface.dropTable('Invoice'))
      .then(() => queryInterface.dropTable('Taskorder'))
      .then(() => queryInterface.dropTable('Mou'));
  }
};