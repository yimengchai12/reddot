const express = require("express");
const router = express.Router();
const { Cases } = require("../models");

router.get("/", async (req, res) => {
    const listOfCases = await Cases.findAll();
    res.json(listOfCases);
});

//get cases belonging to a clientid
router.get("/getclient/:clientId", async (req, res) => {
    const clientId = req.params.clientId;
    const clientCases = await Cases.findAll({where: {ClientId: clientId}});
    res.json(clientCases);
});

// create case
// post requestion json body: 
// {   
//     "message": "I need help with my case",
//     "ClientId": 1,
// }
router.post("/",  async (req, res) => {
    const newCase = req.body;
    await Cases.create(newCase);
    res.json(newCase);
});

//assign a staff to a case 
router.put("/updateStaff", async (req, res) => {
    const caseId = req.body.caseId;
    const assignStaffId = req.body.assignStaffId;
    updatedCase = await Cases.update({StaffId: assignStaffId}, {where: {id: caseId}});
    res.json(updatedCase);
});

// update a case status
router.put("/updateStatus", async (req, res) => {
    const caseId = req.body.caseId;
    const status = req.body.status;
    updatedCase = await Cases.update({status: status}, {where: {id: caseId}});
    res.json(updatedCase);
});

// put request json body:
// {
//     "caseId": 1,
//     "assignStaffId": 2
// }

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
router.get("/pending", async (req, res) => {
    const pendingCases = await Cases.findAll({where: {status: "Pending"}});
    res.json(pendingCases);
});

//get cases belonging to a staffid
router.get("/getstaff/:staffId", async (req, res) => {
    const staffId = req.params.staffId;
    const staffCases = await Cases.findAll({where: {StaffId: staffId}});
    res.json(staffCases);
});

module.exports = router;