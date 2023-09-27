const express = require("express");
const router = express.Router();
const { Staffs } = require("../models");

//get list of staffs
router.get("/", async (req, res) => {
    const listOfStaffs = await Staffs.findAll();
    res.json(listOfStaffs);
});

// get staff by id
router.get("/:staffId", async (req, res) => {
    const staffId = req.params.staffId;
    const staff = await Staffs.findByPk(staffId);
    res.json(staff);
});

// create a staff
router.post("/",  async (req, res) => {
    const staff = req.body;
    await Staffs.create(staff);
    res.json(staff);
});

// delete staff 
router.delete("/:staffId", async (req, res) => {
    const staffId = req.params.staffId;
    await Staffs.destroy({
        where: {
            id: staffId
        }
    });
    res.json("DELETED");
});



// create multiple staffs
router.post("/multiple",  async (req, res) => {
    const stafflist = req.body;
    await Staffs.bulkCreate(stafflist);
    res.json(stafflist);
});


module.exports = router;