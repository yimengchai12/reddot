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

const staffRouter = require("./routes/Staffs");
app.use("/staffs", staffRouter);

db.sequelize.sync().then(() => {
    app.listen(8800, ()=>{
        console.log("Backend server is running!");
    });
});