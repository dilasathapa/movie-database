const express = require("express")
const connection = require("./db/connectDatabase")
// const authRouter = require("./routes/auth.routes")
// const userRouter = require("./routes/getusers.routes")
const cors = require("cors")
const postRouter = require("./routes/postmovies.routes")
const app = express();
// app.use(express.json());


app.use(cors());

app.use(express.json({limit: '2mb'}));


// app.use("/", authRouter);

app.use("/", postRouter)

// app.use("/", userRouter);
  

connection()
.then(() => {
    app.listen(8080, () => console.log('Server listening on http://localhost:8080'));
})

// app.listen(8080, () => console.log('Server listening on http://localhost:8080'));
