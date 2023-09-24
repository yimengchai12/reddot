const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models");

app.use(express.json());
app.use(cors())

const clientRouter = require("./routes/Clients");
app.use("/clients", clientRouter);

const caseRouter = require("./routes/Cases");
app.use("/cases", caseRouter);


// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root", 
//     password: "",
//     database: "reddot"
// })




// app.get("/", (req, res) => {
//     res.json({message: "Welcome to the server!"})
// })

// app.get("/clients", (req, res) => {
//     const q = "SELECT * FROM client"
    
//     db.query(q, (err, data) => {
//         if (err) {
//             return res.status(500).json({message: err.message})
//         } else {
//             return res.json(data)    
//         }
//     })
// })

// app.post("/clients", (req, res) => {
//     const q = "INSERT INTO client (`clientID`, `name`, `address`, `birthdate`, `company`) VALUES (?)";
//     const age = "UPDATE client SET age = DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), birthdate)), '%Y') + 0;"
//     const values = [
//         req.body.clientID,
//         req.body.name,
//         req.body.address,
//         new Date(req.body.birthdate),
//         req.body.company]
//     db.query(q, [values], (err, data) => {
//         if (err) {
//             return res.status(500).json({message: err.message,  })
//         } else {
//             db.query(age, (err, data) => {
//                 if (err) {
//                     return res.status(500).json({message: err.message})
//                 } else {
//                     return res.json(data)
//                 }
//             })
//         }
//     })
// })



db.sequelize.sync().then(() => {
    app.listen(8800, ()=>{
        console.log("Backend server is running!");
    });
});