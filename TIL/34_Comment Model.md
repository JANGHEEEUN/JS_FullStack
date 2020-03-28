# Comment Model

### 1. models

- models/Comment.js 생성

  mongoDB에 파일들이 어떤 식으로 생겨야 할지 알려줘야 함

  ```js
  import mongoose from "mongoose";
  
  const CommentSchema = new mongoose.Schema({
      text: {
          type: String,
          required: "Text is required"
      },
      createdAt: {
          type: Date,
          default: Date.now
      }
  })
  ```
  
  
  



### 2. Video & Comment

video와 comment는 연결되어 있음 - 이 comment는 어떤 video와 직접적으로 연결되어 있는지 정해줘야 함

어떻게 연결 시킬까?

1. Comment에 video ID 저장

   - Comment.js

     mongoose에게 id가 1에 해당하는 video를 가져와 달라고 말함

     ```js
         video:{
             type: mongoose.Schema.Types.ObjectId,  
             ref: "Video" 
         },
     ```

2. video가 ID의 array를 가짐 - 모든 comment ID를 array로 video에 집어넣음

   1번에서 comment.js에 작성한 부분은 삭제 후 진행

   - video.js

     array라 `[]`를 써줘야 함

     ```js
         comments: [{
             type: mongoose.Schema.Types.ObjectId,  
             ref: "Comment"
         }]
     ```

     

### 3. export model

- Comment.js

  ```js
  const model = mongoose.model("Comment", CommentSchema);
  export default model;
  ```

- init.js

  ```js
  import "./models/Comment"
  ```

  