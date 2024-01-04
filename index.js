const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongoproject")
  .then(() => {
    console.log("connect to mongo...");
  })
  .catch((err) => {
    console.log("can not connected....");
  });

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: { type: String, required: true },
  favorites: [String],
  data: { type: Date, default: Date.now() },
  admin: Boolean,
});

const User = mongoose.model("User", userSchema);

async function createUser() {
  const user = new User({
    first_name: "Erfan",
    last_name: "Ajorlu",
    favorites: ["computer science", "soccer", "game", "music", "movie"],
    admin: true,
  });

  const result = await user.save();
  console.log(result);
}

async function getUsers() {
  const users = await User.find({ first_name: "Erfan" })
    .limit(5)
    .sort({ first_name: -1 })
    .select({first_name : 1 , last_name : 1})
    .count();
  console.log(users);
}

getUsers();
// createUser();
