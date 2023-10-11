const factorial = (n) => {
  let result = 1;
  while (n) result *= n--;
  return result;
};

const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/factorial/:number", (req, res) =>
  res.send(`${req.params.number}! == ${factorial(Number(req.params.number))}`)
);
app.get("/factorial", (req, res) =>
  res.redirect(`/factorial/${req.query.number}`)
);

app.listen(port, () => console.log(`Server listening on port ${port}!`));