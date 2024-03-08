const express = require("express");
const app = express();
const port = process.env.PORT || 80;

const router = express.Router();

router.get("/sayHello", function (req, res, next) {
  res.json("Hello User");
});

router.get("/", function (req, res, next) {
  res.json("Please go to /sayHello");
});

app.use(router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
