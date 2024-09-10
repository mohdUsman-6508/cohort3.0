import express from "express";

const app = new express();
const port = 3000;

app.use(express.json());
app.use(requestCounter); // will run before every endpoint
app.use(rateLimiter);

// analogy- amusement park
// we can reuse the middlewares, here we can have more than 1 amusement park and only one ticket counter for them.

// middlewares ////////////////////////////////////////////////
function ticketChecker(req, res, next) {
  const isTicket = req.query.ticket;

  if (!isTicket) {
    res.status(403).json({
      success: false,
      message: "Please buy a ticket first.",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "Welcome!",
  });
  next();
}

// request counter
let requestCount = 0;
function requestCounter(req, res, next) {
  requestCount += 1;
  next();
}

// ratelimiter
let numberOfRequest = {};

setInterval(function () {
  numberOfRequest = {};
}, 1000);

function rateLimiter(req, res, next) {
  // let userId=req.headers.userid;
  let userId = req.query.id;

  if (numberOfRequest[userId]) {
    let requestCount = numberOfRequest[userId];
    requestCount += 1;
    console.log(requestCount);
    if (requestCount > 5) {
      res.status(404).json({
        message: "You can send only 5 request per second.",
      });
    } else {
      next();
    }
  } else {
    numberOfRequest[userId] = 1;
    next();
  }
}

// error counter

////////////////////////////////////////////////////////////

app.get("/", function (req, res) {
  throw new Error(":))))))))))))))))0");
  res.json("Hello, Welcome home.");
});

app.get("/amusement", ticketChecker, function (req, res) {
  res.json({ message: "Welcome to this wonderful park" });
});

app.get("/requests", function (req, res) {
  res.json({
    requestCount: requestCount,
  });
});

app.listen(port, function () {
  console.log(`Listening at localhost:${port}`);
});

let errorCounter = 0;

app.use(function (err, req, res, next) {
  if (err) {
    res.status(404).json({
      message: "Something went wrong",
    });
    errorCounter += 1;
  }
  next();
});
