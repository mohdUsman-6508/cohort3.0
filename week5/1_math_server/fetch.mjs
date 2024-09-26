import express from "express";
import axios from "axios";

const app = new express();
const port = 3000;

app.get("/", async function (req, res) {
  const data = await getData();
  res.json({
    status: "success",
    data,
  });
});

app.get("/user", async function (req, res) {
  const data = await getUserData();
  res.json({
    status: "success",
    data: data,
  });
});

app.listen(port, function () {
  console.log(`Listening at port ${port}`);
});

// making an HTTP request using fetch

async function getData() {
  const url = "https://api.github.com/users/mohdUsman-6508";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status:${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
}

async function getUserData() {
  const url = "https://api.github.com/users/mohdUsman-6508";
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}
