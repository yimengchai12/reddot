const express = require("express");
const router = express.Router();
const { Clients } = require("../models");

router.get("/", async (req, res) => {
    const listOfClients = await Clients.findAll();
    res.json(listOfClients);
});


router.post("/",  async (req, res) => {
    const client = req.body;
    await Clients.create(client);
    res.json(client);
});



module.exports = router;