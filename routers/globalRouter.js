import express from "express";
import routes from "../routes";
import { search, home } from "../controllers/videoController";
import { login, join, logout } from "../controllers/userController";

const globalRouter = express.Router();
globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);


export default globalRouter;