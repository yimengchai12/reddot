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
    return res.json(clientCases);
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

//update a case assigned staff or status 
// put request json body:
// {
//     "StaffId": 2,
//     "status": "Completed"
// }
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
router.get("/inprogress", async (req, res) => {
    const pendingCases = await Cases.findAll({where: {status: "In Progress"}});
    res.json(pendingCases);
});

//get cases belonging to a staffid
router.get("/getstaff/:staffId", async (req, res) => {
    const staffId = req.params.staffId;
    const staffCases = await Cases.findAll({where: {StaffId: staffId}});
    res.json(staffCases);
});

module.exports = router;