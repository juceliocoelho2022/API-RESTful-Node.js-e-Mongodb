//configuração inicial

const { urlencoded } = require("express");
const express = require("express");
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
res.json({message: 'Oi Express!'})

});
//entregar uma porta
app.listen(3000);
