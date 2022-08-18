const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

const confing = require("./config/key");
const { User } = require("./models/User");

//application/x-www-form-urlencoded 형식을 분석 할 수 있게 해준다.
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 형식을 분석 할 수 있게 해준다.
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(confing.mongoURI, {
    // useNewUrlPaser: true,
    // useUnifiedTofology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("MongoDB conected"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => res.send("Hello World!~~안녕하세요"));

app.post("/register", (req, res) => {
  //회원 가입 할떄 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body);
  //mongoDB 메서드
  user.save((err, userInfo) => {
    // 전달에 실패 했을때
    if (err) return res.json({ success: false, err });
    // status(200)은 성공했다는 뜻이다.
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
