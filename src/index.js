require("dotenv").config();
const Express = require("express");
const cors = require("cors");
const { router } = require("./Router/V1/Router.v1");

const app = new Express();
const port = process.env.PORT || 4200;

const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, PATCH",
  optionsSuccessStatus: 200,
};

app.use(Express.json());

app.use(cors(corsOptions));

app.use("/v1", router);

app.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});
