const express = require("express");
//testing test-index (initial)
// const v1Router = require("./v1/routes/test-index");
const bodyParser = require("body-parser");
//for v1 route
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v1MemberRouter = require("./v1/routes/memberRoutes");
const v1RecordRouter = require("./v1/routes/recordRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

//for testing purposes
// app.get("/", (req, res) => {
//  res.send("<h2>It's working.</h2>");
// });

//testing test-index (initial)
// app.use("/api/v1", v1Router);
app.use(bodyParser.json());

//for v1 routes - workout
app.use("/api/v1/workouts", v1WorkoutRouter);

//for v1 routes - member
app.use("/api/v1/members", v1MemberRouter);

//for v1 routes - record
app.use("/api/v1/records", v1RecordRouter);

app.listen(PORT, () => {
 console.log(`API is listening on port ${PORT}`);
});