import express from "express";

const app = new express();
const port = 3000;

app.use(express.json());

app.get("/", function (req, res) {
  return res.json({
    message: "Server is working fine.",
  });
});

app.get("/add", function (req, res) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  if (!a) a = 0;
  if (!b) b = 0;

  const result = a + b;
  res.status(200).json({
    result: result,
  });
});

app.get("/sub", function (req, res) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  if (!a) a = 0;
  if (!b) b = 0;

  const result = a - b;
  res.status(200).json({
    result: `The subtraction of ${a} form ${b} is ${result}`,
  });
});

app.get("/mul", function (req, res) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  if (!a) a = 1;
  if (!b) b = 1;
  const result = a * b;
  res.status(200).json({
    result: `The multiplication of ${a} and ${b} is ${result}`,
  });
});

app.get("/div", function (req, res) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  if (b == 0) {
    return res.status(404).json({
      message: "Cannot divide by zero",
    });
  }

  if (!a) a = 0;
  if (!b) b = 1;

  const result = a / b;
  res.status(200).json({
    result: `The division of ${a} and ${b} is ${result}.`,
  });
});

// only single route
app.get("/calc", function (req, res) {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  let operation = String(req.query.op);

  // other edge case logic can be add e.g divide by zero etc.

  switch (operation) {
    case "add":
      res.json({ result: a + b });
      break;
    case "sub":
      res.json({ result: a - b });
      break;
    case "mul":
      res.json({ result: a * b });
      break;
    case "div":
      res.json({ result: a / b });
      break;

    default:
      res.json({
        message: "please send valid data.",
      });
  }
});

// //////////////////////////////////// //
app.listen(port, function () {
  console.log(`Listening at port ${port}.`);
});
