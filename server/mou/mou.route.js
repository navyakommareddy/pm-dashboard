const path = require('path');
const router = require('express').Router();

const uuid = require('uuid');

const Model = require('../models/index');
const model = Model.getModels();
router.get('/', function (req, res, next) {
    model.Mou.findAll({ include: [model.Taskorder] })
        .then(function (project) {

            return res.status(200).json(project);
        }).catch(err => {
            console.log(err);
            return res.status(500).json({ message: "Failed" })
        });
});
router.post('/edit', function (req, res) {
    model.Mou.find({ where: { Id: req.body.Id } })
        .then(project => {
            if (project) {
                project.updateAttributes({
                    Id: req.body.Id,
                    mouValue: req.body.mouValue,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                })
                    .then(function (mou) {
                        return res.status(200).json({ message: "update success" })
                    }).catch(err => {
                        console.log(err)
                        return res.status(500).json({ message: "failed" })
                    });
            }
        });

});

router.post('/delete', function (req, res) {
    model.Mou.find({ where: { Id: req.body.Id } })
        .then(mou => {
            if (mou) {
                mou.destroy({
                    where: { Id: req.body.Id }, onCascade: "delete",
                }).then(function (mou) {
                    return res.status(200).json({ message: "deletion success" })
                }).catch(err => {
                    console.log(err)
                    return res.status(500).json({ message: "failed" })
                })
            }

        })
})

router.post('/add', function (req, res) {
    model.Mou.create({
        Id: uuid.v4(),
        mouValue: req.body.mouValue,
        startDate: req.body.startDate,
        endDate: req.body.endDate,

    }).then(function (mou) {
        return res.status(200).json({ message: "creation success" })
    }).catch(err => {
        console.log(err)
        return res.status(500).json({ message: err })
    })
})

module.exports = router;