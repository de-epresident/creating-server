const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const userRoute = require("./routes/userRoute");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/user", userRoute);


app.get("/", (req, res) => {
  res.send('welcome to my API!'); 
});
//im

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});