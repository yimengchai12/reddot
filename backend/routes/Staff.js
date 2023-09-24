const express = require("express");
const router = express.Router();
const { Staffs } = require("../models");

router.get("/", async (req, res) => {
    const listOfStaffs = await Staff.findAll();
    res.json(listOfStaffs);
});

router.get("/:staffId", async (req, res) => {
    const staffId = req.params.staffId;
    const staffCases = await Cases.findAll({where: {StaffId: staffId}});
    res.json(staffCases);
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