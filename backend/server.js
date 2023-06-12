require("dotenv").config();
const express  = require("express");
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user")
const mongoose = require("mongoose");
// const cors = require("cors")


//express app
const app = express();

// app.use(cors({origin: "*", credentials: true}));

// middleware
app.use(express.json())
// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next()
// })

// routes
app.use("/api/workouts", workoutRoutes);

app.use("/api/user", userRoutes)


// connect to MongoDB

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests
app.listen(process.env.PORT, () => {
    console.log("Joined the database and Listening on port 4000!")
})


})
.catch((error) => {
    console.log(error)
})

