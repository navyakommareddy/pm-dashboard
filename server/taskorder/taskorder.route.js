const path = require('path');
const router = require('express').Router();
const uuid = require('uuid');
const Model = require('../models/index');
const model = Model.getModels();
router.get('/', function (req, res, next) {
    model.Taskorder.findAll({ include: [model.Invoice] }).then(function (taskorder) {
        return res.status(200).json(taskorder);
    }).catch(err => {
        console.log(err);
        return res.status(500).json({ message: "Failed" })
    });
});

router.post('/edit', function (req, res) {
    model.Taskorder.find({ where: { Id: req.body.Id } })
        .then(taskorder => {
            if (taskorder) {
                taskorder.updateAttributes({
                    Id: req.body.Id,
                    projectName: req.body.projectName,
                    projectDesc: req.body.projectDesc,
                    totalBudget: req.body.totalBudget,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    projectManager: req.body.projectManager,
                    overheadRate: req.body.overheadRate,
                    clientName: req.body.clientName,
                    clientType: req.body.clientType,
                    contactName: req.body.contactName,
                    email: req.body.email,
                    phone: req.body.phone,
                    subcontractor: req.body.subcontractor
                })
                    .then(function (taskorder) {
                        return res.status(200).json({ message: "update success" })
                    }).catch(err => {
                        console.log(err)
                        return res.status(500).json({ message: "failed" })
                    });
            }
        });

});

router.post('/delete', function (req, res) {
    model.Taskorder.find({ where: { Id: req.body.Id } })
        .then(taskorder => {
            if (taskorder) {
                taskorder.destroy({
                    where: { Id: req.body.Id }, onCascade: "delete",
                }).then(function (taskorder) {
                    return res.status(200).json({ message: "deletion success" })
                }).catch(err => {
                    console.log(err)
                    return res.status(500).json({ message: "failed" })
                })
            }

        })
})

router.post('/add', function (req, res) {
    model.Taskorder.create({
        Id: uuid.v4(),
        projectName: req.body.projectName,
        projectDesc: req.body.projectDesc,
        clientName: req.body.clientName,
        clientType: req.body.clientType,
        totalBudget: req.body.totalBudget,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        projectManager: req.body.projectManager,
        overheadRate: req.body.overheadRate,
        fixedorTM: req.body.type,
        contactName: req.body.contactName,
        email: req.body.email,
        phone: req.body.phone,
        subcontractor: req.body.subcontractor,
        mouId: req.body.mouId

    }).then(function (project) {
        return res.status(200).json({ message: "creation success" })
    }).catch(err => {
        console.log(err)
        return res.status(500).json({ message: err })
    })
})

module.exports = router;