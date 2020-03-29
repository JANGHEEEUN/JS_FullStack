# Comment Model

### 1. How to Use the Model

- videoController.js

  ```js
import Video from "../models/Video";
  
  export const home = async (req, res) => {
      try{
          const videos = await Video.find({});
          res.render("home", { pageTitle: "Home", videos });
      } catch(error){
          console.log(error);
          res.render("home", {pageTitle: "Home", videos: [] });
      }
  };
  ```
  
  - `async`: javascript에게 해당 function의 어떤 부분은 꼭 기다려야 한다고 말해주는 것과 같음
  
  - `await`:해당 과정이 끝날 때까지 잠시 기다려 달라는 의미 - async 없이는 사용 불가
  
  - `try catch`
  
  