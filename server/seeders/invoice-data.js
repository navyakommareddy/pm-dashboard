const uuid = require('uuid');
module.exports = [
  {
    Id: uuid.v4(),
    startDate:'6/27/2016',
    endDate:'10/30/2017',
    invoiceAmt:2000,
    paid:"1",
    taskorderId:"9688adee-6ff4-41e3-94e2-1d7fb3e6d2ea"
  },
  {
    Id: uuid.v4(),
    startDate:'11/1/2017',
    endDate:'7/30/2018',
    invoiceAmt:3000,
    paid:"1",
    taskorderId:"9688adee-6ff4-41e3-94e2-1d7fb3e6d2ea"
  },
  {
    Id: uuid.v4(),
    startDate:'12/13/2017',
    endDate:'5/30/2018',
    invoiceAmt:1500,
    paid:"1",
    taskorderId:"ea198bf0-666c-4891-a6fc-0d055c7c6ad0"
  },
  {
    Id: uuid.v4(),
    startDate:'6/1/2018',
    endDate:'12/31/2018',
    invoiceAmt:1000,
    paid:"0",
    taskorderId:"ea198bf0-666c-4891-a6fc-0d055c7c6ad0"
  }
];