import express from "express";
import routes from "../routes";
import { search, home } from "../controllers/videoController";
import { login, getJoin, logout, postJoin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);


export default globalRouter;