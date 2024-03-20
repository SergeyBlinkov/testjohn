require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const router = require('./routes/RouteStore')
const MiddleWare = require('./errors/MiddleWare')
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({ message: "working" });
});
app.use("/api",router);
app.get("/test",(req,res) => {
    res.send({message:"all fine"})
})

app.use(MiddleWare); //should be last %app.use% element

const start = () => {
    try {
        app.listen(PORT, () =>
            console.log(
                `Server started on port http://localhost:${PORT}/api`
            )
        );
    } catch (e) {
        console.error(e);
    }
};

start();
