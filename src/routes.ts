import { Router } from "express";

import GamesController from "./controllers/Games";

const router = Router();

router.use("/get-games-list", GamesController.getGamesList);
router.use("/get-game-details", GamesController.getGameDetails);

export default router;
