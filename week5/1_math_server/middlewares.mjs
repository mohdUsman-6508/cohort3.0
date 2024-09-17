import express from "express";

const app = new express();
const port = 3000;
app.use(express.json());

app.use(giveDetails);

// middlewares
function giveDetails(req, res, next) {
  console.log(new Date());
  console.log(`URL of incoming request is: ${req.url}`);
  console.log(`METHOD of incoming request is: ${req.method}`);
  next();
}

// ////////////////////////////////////////////////////////// //

//  /////////////////////////////////////////////////////////////// //
// routes //
app.get("/", function (req, res) {
  res.json({
    message: "working fine...",
  });
});

// app.get("/quote", giveDetails, quote);
app.get("/quote", quote);

// //////////////////////////////////////////////////////////// //

// functions //

function quote(req, res) {
  res.status(200).json({
    success: true,
    quote: "Just DO it.",
  });
}

app.listen(port, function () {
  console.log(`Listening at port ${port}`);
});
