'use strict';
const projectInvoices = require('./projectInvoices-data')
const project = require('./project-data');
const taskorder = require('./taskorder-data');
const Mou = require('./mou-data');
const invoice = require('./invoice-data');
module.exports = {
  up: (queryInterface, Sequelize) => {

    /*projectInvoice*/

    //  const projectInvoiceData = projectInvoices.map(pi=>({
    //    Id:pi.Id,
    //    startDate:pi.startDate,
    //    endDate:pi.endDate,
    //    invoiceAmt:pi.invoiceAmt,
    //    paid:pi.paid,
    //    projectId:pi.projectId,
    //    createdAt: new Date(),
    //    updatedAt: new Date()

    /*project*/

    // const projectData = project.map(p => ({
    //   Id: p.Id,
    //   projectName: p.projectName,
    //   projectDesc: p.projectDesc,
    //   clientName: p.clientName,
    //   totalBudget: p.totalBudget,
    //   startDate: p.startDate,
    //   endDate: p.endDate,
    //   projectManager: p.projectManager,
    //   overheadRate: p.overheadRate,
    //   fixedorTM: p.fixedorTM,
    //   clientType: p.clientType,
    //   contactName: p.contactName,
    //   email: p.email,
    //   phone: p.phone,
    //   subcontractor:p.subcontractor,
    //   createdAt: new Date(),
    //   updatedAt: new Date()

    /*taskorder*/

    // const taskorderData = taskorder.map(t=>({
    //   Id: t.Id,
    //   projectName: t.projectName,
    //   projectDesc: t.projectDesc,
    //   clientName: t.clientName,
    //   totalBudget: t.totalBudget,
    //   startDate: t.startDate,
    //   endDate: t.endDate,
    //   projectManager: t.projectManager,
    //   overheadRate: t.overheadRate,
    //   fixedorTM: t.fixedorTM,
    //   clientType: t.clientType,
    //   contactName: t.contactName,
    //   email: t.email,
    //   phone: t.phone,
    //   subcontractor:t.subcontractor,
    //   mouId:t.mouId,
    //   createdAt: new Date(),
    //   updatedAt: new Date()

    /*Mou*/

    //  const MouData = Mou.map(m=>({
    //    Id:m.Id,
    //    startDate:m.startDate,
    //    endDate:m.endDate,
    //    mouValue:m.mouValue,
    //    createdAt: new Date(),
    //    updatedAt: new Date()

    /*Invoice*/

     const invoiceData = invoice.map(i=>({
       Id:i.Id,
       startDate:i.startDate,
       endDate:i.endDate,
       invoiceAmt:i.invoiceAmt,
       paid:i.paid,
       taskorderId:i.taskorderId,
       createdAt: new Date(),
       updatedAt: new Date()

    }))
    // return queryInterface.bulkInsert('ProjectInvoice',projectInvoiceData)
    // return queryInterface.bulkInsert('Project', projectData)
    // return queryInterface.bulkInsert('Taskorder',taskorderData)
    // return queryInterface.bulkInsert('Mou',MouData)
    return queryInterface.bulkInsert('Invoice',invoiceData)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
