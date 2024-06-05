const PORT = process.env.PORT ?? 8000;
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());

//get all the input data

app.get("/Input/:userEmail", async (req, res) => {
  console.log(req);
  const {userEmail} = req.params;
  console.log(userEmail);

  try {
    const inputValues = await pool.query(
      "SELECT * FROM inputValues WHERE user_email = $1",
      [userEmail]
    );
    res.json(inputValues.rows);
  } catch (err) {
    console.log(err);
  }
});

//get all the form data
app.get("/:userEmail", async (req, res) => {
  console.log(req);
  const {userEmail} = req.params;
  console.log(userEmail);

  try {
    const inputValues = await pool.query(
      "SELECT * FROM formData WHERE user_email = $1",
      [userEmail]
    );
    res.json(inputValues.rows);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
