const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

//connecting to database
const dbURL = "mongodb://localhost:27017/foodie";
mongoose.connect(dbURL).then(() => {
  console.log("connected to database");
});

//require database models
const User = require("./models/user");
const AddedData = require("./models/addData");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); //cross origin resource sharing (used to connect FE and BE)


app.post("/AddPost", async (req, res) => {
  let postData = new AddedData({
    author: req.body.author,
    title: req.body.title,
    summary: req.body.summary,
    image: req.body.image,
    location: req.body.location,
    rating: req.body.rating,
  });
  try {
    await postData.save();
    res.send({ message: "Post Added Successfully" });
  } catch (err) {
    res.send({ message: "failed to add post" });
  }
});

app.get("/Food", async (req, res) => {
  try {
    const posts = await AddedData.find();
    res.json(posts)
  } catch (err) {
    console.log(err);
  }
});

app.get('/Food/:id' , async(req,res)=>{
    const {id} = req.params
    try
    {
        const singlePost = await AddedData.findById(id)
        res.send(singlePost)
    }
    catch(err)
    {
        console.log(err);
    }
})

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, userData) => {
    if (userData) {
      if (req.body.password == userData.password) {
        res.send({ message: "login successfull" });
      } else {
        res.send({ message: "incorrect password" });
      }
    } else {
      res.send({ message: "seems you've not regester before" });
    }
  });
});

app.post("/signup", async(req, res) => {
  User.findOne({ email: req.body.email }, (err, userData) => {
    if (userData) {
      res.send({ message: "user already exists" });
    } else {
      const data = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      data.save(() => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "new user is created" });
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
