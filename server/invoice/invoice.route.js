const path = require('path');
const router = require('express').Router();
const uuid = require('uuid');

const Model = require('../models/index');
const model = Model.getModels();

router.get('/invoice', (req, res, next) => {
    console.log("you are here");
    model.ProjectInvoice.findAll({ exclude: [model.Project] }).then(function (invoice) {
        console.log(JSON.stringify(invoice));
        return res.status(200).json({ message: "success" });
    }).catch(err => {
        console.log(err);
        return res.status(500).json({ message: "Failed" })
    });
});

router.post('/add', function (req, res) {
    model.Invoice.create({
        Id: uuid.v4(),
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        invoiceAmt: req.body.invoiceAmt,
        paid: req.body.paid,
        taskorderId: req.body.taskorderId,

    }).then(function (project) {
        return res.status(200).json({ message: "creation success" })
    }).catch(err => {
        console.log(err)
        return res.status(500).json({ message: err })
    })
})

module.exports = router;
