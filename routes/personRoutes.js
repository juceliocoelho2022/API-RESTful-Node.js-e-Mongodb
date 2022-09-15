const router = require("express").Router();

const Person = require("../models/Person");
router.post("/", async (req, res) => {
  // req.body
  //{name: "jucelio", salary:5000, approved: false}
  const { name, salary, approved } = req.body;

  if (!name) {
    res.status(422).json({ error: "O nome é obrigatorio!" });
    return
  }
  const person = {
    name,
    salary,
    approved,
  };
  //create
  try {
    await Person.create(person);

    res.status(2001).json({ message: "Pessoa inserida com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const peolpe = await Person.find();
    res.status(200).json(peolpe);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const person = await Person.findOne({ _id: id });

    if (!person) {
      res.status(422).json({ message: "O usuario não foi encontrado!" });
      return
    }

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
module.exports = router;
