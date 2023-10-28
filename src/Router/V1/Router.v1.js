import { Express } from "express";

import { registerUser } from "../../controllers/User.controller";

import { insertTask } from "../../controllers/Task.controller";

const router = Express.Router();

// Data user end-points
router.post("/newUser", registerUser);

// Data task end-points
router.post('/newTask', insertTask);

export default router;
