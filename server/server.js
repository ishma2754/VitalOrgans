const PORT = process.env.PORT ?? 8000;
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const app = express();
const pool = require("./db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

//get all the input data

app.get("/Input/:userEmail", async (req, res) => {
 
  const { userEmail } = req.params;
  

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
  const { userEmail } = req.params;
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



app.post("/", async (req, res) => {
  const {
    user_email,
    name,
    age,
    emergencycontact,
    gender,
    medicalconditions,
    bloodgroup,
  } = req.body;

  try {
    const existingData = await pool.query(
      "SELECT * FROM formData WHERE user_email = $1",
      [user_email]
    );

    if (existingData.rows.length > 0) {
      res.status(409).json({ message: "Data already exists" });
    } else {
      const id = uuidv4();
      await pool.query(
        `INSERT INTO formData(id, user_email, name, age, emergencycontact, gender, medicalconditions, bloodgroup) 
         VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          id,
          user_email,
          name,
          age,
          emergencycontact,
          gender,
          medicalconditions,
          bloodgroup,
        ]
      );
      res.json({ message: "Data inserted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Update existing form data
app.put("/", async (req, res) => {
  const {
    user_email,
    name,
    age,
    emergencycontact,
    gender,
    medicalconditions,
    bloodgroup,
  } = req.body;

  try {
    const existingData = await pool.query(
      "SELECT * FROM formData WHERE user_email = $1",
      [user_email]
    );

    if (existingData.rows.length > 0) {
      await pool.query(
        `UPDATE formData SET name = $2, age = $3, emergencycontact = $4, gender = $5, medicalconditions = $6, bloodgroup = $7 WHERE user_email = $1`,
        [
          user_email,
          name,
          age,
          emergencycontact,
          gender,
          medicalconditions,
          bloodgroup,
        ]
      );
      res.json({ message: "Data updated successfully" });
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

//create a new input data
app.post("/Input", async (req, res) => {
  const {
    user_email,
    bpsys,
    bpdia,
    pulserate,
    totalcholesterol,
    hdlcholesterol,
    ldlcholesterol,
    bloodglucosefasting,
    bloodglucosepp,
    creatinine,
    date,
  } = req.body;
  console.log(
    user_email,
    bpsys,
    bpdia,
    pulserate,
    totalcholesterol,
    hdlcholesterol,
    ldlcholesterol,
    bloodglucosefasting,
    bloodglucosepp,
    creatinine,
    date
  );
 const id = uuidv4();
  try {
    const newInputValues = pool.query(
      `INSERT INTO inputValues (id, user_email, bpsys, bpdia, pulserate, totalcholesterol , hdlcholesterol, ldlcholesterol, bloodglucosefasting, bloodglucosepp, creatinine, date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
      [
        id,
        user_email,
        bpsys,
        bpdia,
        pulserate,
        totalcholesterol,
        hdlcholesterol,
        ldlcholesterol,
        bloodglucosefasting,
        bloodglucosepp,
        creatinine,
        date,
      ]
    );
    res.json(newInputValues);
  } catch (err) {
    console.error(err);
  }
});

//sign up
app.post('/signup', async (req, res) => {
  const {email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try{
    const signUp = await pool.query(`INSERT INTO users (email, hashed_password) VALUES($1, $2)`, [email, hashedPassword])

    const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})

    res.json({email, token})

  }catch (err){
    console.error(err)
    if(err){
      res.json({detail: err.detail})
    }
  }
})


//login

app.post('/login', async (req, res) => {
  const {email, password } = req.body;
  try{
   const users =  await pool.query('SELECT * FROM users WHERE email = $1', [email])
   if (!users.rows.length) return res.json({details: 'User does not exist!'})

    const success = await bcrypt.compare(password, users.rows[0].hashed_password);
    const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})

    if(success){
      res.json({'email' : users.rows[0].email, token})
    }else {
      res.json({detail : "Login failed"})
    }

  }catch (err){
    console.error(err)
  }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
