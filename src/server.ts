import express, { Request, Response } from "express";
import cors from "cors";

import { WHITELISTED_ORIGINS, PORT } from "./config/environment";
import routes from "./routes";

export const startServer = async () => {
  const app = express();

  app.use(
    cors({
      origin: WHITELISTED_ORIGINS,
    })
  );

  app.use("/", routes);

  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.json({ message: "This server is healthy." });
  });
 

  app.listen(PORT, () => {
    console.info(`App has started at port ${PORT}`);
  });
};
