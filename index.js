//configuração inicial

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Person = require("./models/Person");

// forma de ler json / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas da API

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);
//rota inicial / endpoint
app.get("/", (req, res) => {
  //mostar req
  res.json({ message: "Oi Express!" });
  //mongodb+srv://jucelio:<password>@apicluster0.lza2dho.mongodb.net/?retryWrites=true&w=majority
});
//entregar uma porta

const DB_USER = "MONGODB";
const DB_PASSWORD = encodeURIComponent("7uQYfIcEc9vDkag2");
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@mongodbcluster0.m7ifrt4.mongodb.net/?retryWrites=true&w=majority `
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
