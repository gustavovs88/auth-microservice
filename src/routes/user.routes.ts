import { Router, Request, Response, NextFunction } from "express";
import userControllers from "../controllers/user.controllers";
import AppUser from "../models/AppUser.entity";

const usersRoutes = Router();

usersRoutes.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = { id: "ahohoadhs", email: "gustavovs88@gmail.com" };
  res.status(200).send({ users });
});

usersRoutes.get(
  "/users/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const userID = req.params.id;
    const user = { id: userID, email: "gustavovs88@gmail.com" };
    res.status(200).send({ user });
  }
);

usersRoutes.post(
  "/users",
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    await userControllers.createUser(user.email, user.password);
    res.sendStatus(200);
  }
);

usersRoutes.put(
  "/users/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const userID = req.params.id;
    const userUpdated = req.body;
    res.status(200).send({ id: userID, ...userUpdated });
  }
);

usersRoutes.delete(
  "/users/:id",
  (req: Request, res: Response, next: NextFunction) => {
    const userID = req.params.id;
    res.status(200).send(`user ${userID} deleted`);
  }
);

export default usersRoutes;
