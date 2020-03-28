# Configuring Dot Env

### 1. configuring Dot Env

- `.env` 파일 생성

  ```
  MONGO_URL="mongodb://localhost:27017/we-tube"
  PORT = 4000
  ```

- db.js 수정

  dotenv.config라는 함수로 `.env` 파일 안에 있는 정보를 불러올 수 있음

  ```
  import mongoose from "mongoose";
  import dotenv from "dotenv";
  dotenv.config();
  
  mongoose.connect(
      process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useFindAndModify: false
    }
  );
  ```

- `.gitinore`에 `.env` 파일 추가

  그렇지 않으면 env 파일에 key가 다 적혀 있으므로 dotenv를 한 이유가 없어짐

- init.js도 같은 방식으로 진행

  이런 식으로 key를 숨기는 것 (포트 번호를 직접 보이지 않도록)

  ```
  import dotenv from "dotenv";
  dotenv.config();
  
  const PORT = process.env.PORT || 4000;
  ```

  