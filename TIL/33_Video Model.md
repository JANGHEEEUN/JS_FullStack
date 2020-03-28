# Video Model

### 1. models

- models 폴더 생성

- models/Videos.js 생성

  mongoDB에 파일들이 어떤 식으로 생겨야 할지 알려줘야 함

  ```js
  import mongoose from "mongoose";
  
  const VideoSchema = new mongoose.Schema({
      fileUrl: {
          type: String,
          required: "File URL is required"
      },
      title: {
          type: String,
          required: "Title is required"
      },
      description: String,
      views: {
          type: Number,
          default: 0
      },
      createdAt: {
          type: Date,
          default: Date.now
      }
  });
  
  const model = mongoose.model("Video", VideoSchema);
  
  export default model
  ```

  - fileUrl

    video를 DB에 저장하지 않을 것

    서버(amazon)에 비디오를 저장할 에정

    그래서 fileUrl에  주소를 넣어줌

- mongoDB에 다른 것을 넣어야 할 때 아래 url 참고하기

  https://mongoosejs.com/docs/guide.html



### 2. update init.js

우리 DB는 Videos.js를 인지 못 함

- init.js에 아래 코드 추가

  ```js
  import "./models/Video";
  ```

  