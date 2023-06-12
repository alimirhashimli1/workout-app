const express = require("express");

const router = express.Router();
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,

} = require("../controllers/workoutController");

// require auth for all workout routes
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth)

// get all workout
router.get("/", getWorkouts)
// get single workout
router.get("/:id", getWorkout)

// post a new workout
router.post("/", createWorkout)

// delete a workout
router.delete("/:id", deleteWorkout)

// UPDATE  a workout
router.patch("/:id", updateWorkout)


module.exports = router;