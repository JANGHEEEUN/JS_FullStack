# MVC pattern part two

### 1. Making urls

- app.js - 간단한 변경

  ```js
  //app.use("/user", userRouter);
  //app.use("/video", videoRouter);
  
  app.use("/users", userRouter);
  app.use("/videos", videoRouter);
  ```

- create routes.js

  ~Router.js에서 url을 처리해버리는 것이 아니라 routes.js에서 처리하도록 할 것임

  ~Router.js에서 설정한 url을 다른 곳에서 사용해야 할 수도 있기 때문

  만약 ~Router.js에 `user/id/edit`처럼 설정해 놓는다면 개발자가 구조를 외워야 하는 문제가 발생

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
  ```

  - `:id`와 같이 사용하는 이유

    express는 매우 똑똑해서 `id`는 텍스트로 인식하고 `:id`는 변하는 값으로 인식함

- routes.js에 object 추가

  ```js
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
  
  //export 
  export default routes;
  ```



### 2. url 적용하기

- import

  ```js
  import routes from "./routes";
  ```

- app.js 코드 변경

  <before>

  ```js
  app.use("/", globalRouter);
  app.use("/users", userRouter);
  app.use("/videos", videoRouter);
  ```

  <after>

  ```js
  app.use(routes.home, globalRouter);
  app.use(routes.users, userRouter);
  app.use(routes.videos, videoRouter);
  ```

- globalRouter.js

  ```python
  import express from "express";
  import routes from "../routes";
  
  const globalRouter = express.Router();
  globalRouter.get(routes.home, (req,res) => res.send('Home'));
  globalRouter.get(routes.join, (req,res) => res.send('Join'));
  globalRouter.get(routes.login, (req,res) => res.send('Login'));
  globalRouter.get(routes.logout, (req,res) => res.send('Logout'));
  globalRouter.get(routes.search, (req,res) => res.send('Search'));
  
  
  export default globalRouter;
  ```

  - localhost:4000**/**

    ![image-20200309140030799](images/image-20200309140030799.png)  

  - localhost:4000**/login**

    ![image-20200309140110096](images/image-20200309140110096.png) 

