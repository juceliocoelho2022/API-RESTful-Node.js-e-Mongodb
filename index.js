//configuração inicial

const { urlencoded } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

// forma de ler json / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rota inicial / endpoint
app.get("/", (req, res) => {
  //mostar req
  res.json({ message: "Oi Express!" });
  //mongodb+srv://jucelio:<password>@apicluster0.lza2dho.mongodb.net/?retryWrites=true&w=majority
});
//entregar uma porta

const DB_USER ='jucelio'
const DB_PASSWORD = encodeURIComponent('juce.1981')
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster0.lza2dho.mongodb.net/?retryWrites=true&w=majority `
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
