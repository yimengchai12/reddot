const express = require("express");
const router = express.Router();
const { Cases } = require("../models");

router.get("/", async (req, res) => {
    const listOfCases = await Cases.findAll();
    res.json(listOfCases);
});

router.get("/:clientId", async (req, res) => {
    const clientId = req.params.clientId;
    const clientCases = await Cases.findAll({where: {ClientId: clientId}});
    res.json(clientCases);
});


router.post("/",  async (req, res) => {
    const newCase = req.body;
    await Cases.create(newCase);
    res.json(newCase);
});

// post requestion json body: 
// {   
//     "message": "I need help with my case",
//     "ClientId": 1,
// }

router.put("/updateStaff/:caseId", async (req, res) => {
    const caseId = req.params.caseId;
    const assignStaffId = req.body.assignStaffId;
    await Cases.update({StaffId: assignStaffId}, {where: {id: caseId}});
    res.json(assignStaffId);
});

// put requestion json body:
// {
//     "assignStaffId": 2
// }




module.exports = router;