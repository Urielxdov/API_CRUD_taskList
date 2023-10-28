import { Express } from "express";

import { registerUser } from "../../controllers/User.controller"

const router = Express.Router();

router.post('/newUser', registerUser);


export default router;