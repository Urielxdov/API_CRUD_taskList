require("dotenv").config();
const Express = require("express");
const cors = require("cors");

const app = new Express();

const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, PATCH",
  optionsSuccessStatus: 200,
};

app.use(Express.json());

app.use(cors(corsOptions));
