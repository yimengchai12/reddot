const express = require("express");
const router = express.Router();
const { Clients } = require("../models");

// get all clients
router.get("/", async (req, res) => {
    const listOfClients = await Clients.findAll();
    res.json(listOfClients);
});


// get client by id
router.get("/:clientId", async (req, res) => {
    const clientId = req.params.clientId;
    const client = await Clients.findByPk(clientId);
    res.json(client);
});

// update client by id
router.put("/:clientId", async (req, res) => {
    const clientId = req.params.clientId;
    const client = await Clients.findByPk(clientId);
    const updatedClient = await client.update(req.body);
    res.json(updatedClient);
});

// delete client by id
router.delete("/:clientId", async (req, res) => {
    const clientId = req.params.clientId;
    await Clients.destroy({
        where: {
            id: clientId
        }
    });
    res.json("DELETED");
});


// create client 
// post requestion json body:
// {
//     "name": "John Doe",
//     "birthdate": "1993-01-01", (date format)
//     "age": 30,
//     "address": "123 Main St, New York, NY 10001",
//     "company": "ABC Company"
// }
router.post("/",  async (req, res) => {
    const client = req.body;
    await Clients.create(client);
    res.json(client);
});

// create multiple clients 
router.post("/multiple",  async (req, res) => {
    const clientlist = req.body;
    await Clients.bulkCreate(clientlist);
    res.json(clientlist);
});



module.exports = router;