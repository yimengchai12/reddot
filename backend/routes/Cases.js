const express = require("express");
const router = express.Router();
const { Cases } = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//get list of cases
router.get("/", async (req, res) => {
    const listOfCases = await Cases.findAll();
    res.json(listOfCases);
});

// get case by id
router.get("/:caseId", async (req, res) => {
    const caseId = req.params.caseId;
    const caseObj = await Cases.findByPk(caseId);
    res.json(caseObj);
});

//get cases belonging to a clientid
router.get("/getclient/:clientId", async (req, res) => {
    const clientId = req.params.clientId;
        const clientCases = await Cases.findAll({where: {ClientId: clientId}});
    return res.json(clientCases);
});

// create case
router.post("/",  async (req, res) => {
    const newCase = req.body;
    await Cases.create(newCase);
    res.json(newCase);
});

//update a case assigned staff or status 
router.put("/:caseId", async (req, res) => {
    const caseId = req.params.caseId;
    updatedCase = await Cases.update(req.body, {where: {id: caseId}});
    res.json(updatedCase);
});

// create multiple cases
router.post("/multiple",  async (req, res) => {
    const caselist = req.body;
    await Cases.bulkCreate(caselist);
    res.json(caselist);
});

//get completed cases 
router.get("/completed", async (req, res) => {
    const completedCases = await Cases.findAll({where: {status: "Completed"}});
    res.json(completedCases);
});


//get pending cases
router.get("/outstanding", async (req, res) => {
    const outstandingCases = await Cases.findAll({where: {status: {[Op.not]: "Completed"}}});
    res.json(outstandingCases);
});

//get cases belonging to a staffid
router.get("/getstaff/:staffId", async (req, res) => {
    const staffId = req.params.staffId;
    const staffCases = await Cases.findAll({where: {StaffId: staffId}});
    res.json(staffCases);
});

module.exports = router;