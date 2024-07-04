let express = require("express");
let app = express();
let port = 3000;

app.get("/daily-routine", (req, res) => {
  res.send("Workout, Working, Coding, Sleeping.");
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
