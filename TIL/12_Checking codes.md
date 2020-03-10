# Checking Codes

### 1. init.js & app.js

- init.js

  ```js
  import app from "./app";
  
  const PORT = 4000;
  
  const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
  
  app.listen(PORT, handleListening);
  ```

- app.js

  ```js
  import express from "express";
  import morgan from "morgan";
  import helmet from "helmet";
  import cookieParser from "cookie-parser";
  import bodyParser from "body-parser";
  import userRouter from "./routers/userRouter";
  import videoRouter from "./routers/videoRouter";
  import globalRouter from "./routers/globalRouter";
  import routes from "./routes";
  
  const app = express();
  
  //middleware 생성
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(helmet());
  app.use(morgan("dev"));
  
  //url routes가 3개로 나눠짐
  app.use(routes.home, globalRouter);
  app.use(routes.users, userRouter);
  app.use(routes.videos, videoRouter);
  
  export default app;
  
  ```

  

### 2. routes.js

- routes.js

  ```js
  //Global
  const HOME = "/";
  const JOIN = "/join";
  const LOGIN = "/login";
  const LOGOUT = "/logout";
  const SEARCH = "/search";
  
  //Users
  const USERS = "/users";
  const USER_DETAIL = "/:id";
  const EDIT_PROFILE = "/edit-profile";
  const CHANGE_PASSWORD = "/change-password";
  
  
  //Videos
  const VIDEOS = "/videos";
  const UPLOAD = "/upload";
  const VIDEO_DETAIL = "/:id";
  const EDIT_VIDEO = "/:id/edit";
  const DELETE_VIDEO = "/:id/delete";
  
  const routes = {
      home: HOME,
      join: JOIN,
      login: LOGIN,
      logout: LOGOUT,
      search: SEARCH,
      users: USERS, 
      userDetail: USER_DETAIL,
      editProfile: EDIT_PROFILE,
      changePassword: CHANGE_PASSWORD,
      videos: VIDEOS,
      upload: UPLOAD,
      videoDetail: VIDEO_DETAIL,
      editVideo: EDIT_VIDEO,
      deleteVideo: DELETE_VIDEO
  };
  
  export default routes;
  ```



### 3. Controllers

- userController.js

  userDetail이 editProfile과 changePassword에 영향을 주므로 맨 아래로 이동

  ```js
  export const join = (req, res) => res.send("Join");
  export const login = (req, res) => res.send("Login");
  export const logout = (req, res) => res.send("Logout");
  export const users = (req, res) => res.send("Users");
  export const editProfile = (req, res) => res.send("Edit Profile");
  export const changePassword = (req, res) => res.send("Change Password");
  export const userDetail = (req, res) => res.send("User Detail");
  ```

- videoController.js

  ```js
  export const home = (req, res) => res.send("Home");
  export const search = (req, res) => res.send("Search");
  export const videos = (req, res) => res.send("Videos");
  export const upload = (req, res) => res.send("Upload");
  export const videoDetail = (req, res) => res.send("Video Detail");
  export const editVideo = (req, res) => res.send("Edit Video");
  export const deleteVideo = (req, res) => res.send("Delete Video");
  ```

  

### 4. Routers

- globalRouter.js

  ```js
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
  ```

- userRouter.js

  ```js
  import express from "express";
  import routes from "../routes";
  import { users, userDetail, editProfile, changePassword } from "../controllers/userController";
  
  const userRouter = express.Router();
  userRouter.get(routes.users, users);
  userRouter.get(routes.editProfile, editProfile);
  userRouter.get(routes.changePassword, changePassword);
  userRouter.get(routes.userDetail, userDetail);
  
  export default userRouter;
  ```

- videoRouter.js

  ```js
  import express from "express";
  import routes from "../routes";
  import { videos, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";
  
  const videoRouter = express.Router();
  
  videoRouter.get(routes.videos, videos);
  videoRouter.get(routes.upload, upload);
  videoRouter.get(routes.videoDetail, videoDetail);
  videoRouter.get(routes.editVideo, editVideo);
  videoRouter.get(routes.deleteVideo, deleteVideo);
  
  export default videoRouter;
  ```

  