const express = require("express");
const bodyParser=require('body-parser')
const app = express();


const dbConfig = require("./db");
const roomsRoute = require("./routes/roomRoute");
const usersRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");
const cors=require('cors')
 
 
 
 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(express.json());
app.use("/api/rooms", roomsRoute);
 
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);
 

const port = process.env.PORT || 8081;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node app listening on ${port} port!`));
