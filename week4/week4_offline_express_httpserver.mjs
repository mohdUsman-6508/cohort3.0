//doctor analogy

import bodyParser from "body-parser";
import express from "express";

const app = new express();
const port = 8000;
app.use(bodyParser.json());

app.get("/", mylogic);

app.listen(port, function () {
  console.log(`Listening at port: ${port} :)`);
});

// logics

function mylogic(req, res) {
  const n = req.query.n;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  res.status(200).json({
    success: true,
    message: "Sum of first n numbers",
    sum: sum,
  });
}
