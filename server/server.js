const PORT = process.env.PORT ?? 8000;
const express = require("express");
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const app = express();
const pool = require("./db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Maintain the original name of the file
  }
});

const upload = multer({ storage: storage });

app.post('/ReportsPage', upload.single('pdfFile'), async (req, res) => {
  const { user_email } = req.body;
  const file_path = req.file.path;
  const file_name = req.file.originalname;

  try {
    const id = uuidv4();
    await pool.query(
      `INSERT INTO pdf_reports(id, user_email, file_path, file_name) 
       VALUES($1, $2, $3, $4)`,
      [id, user_email, file_path, file_name]
    );

    res.json({ message: 'PDF file uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while uploading the PDF file' });
  }
});


app.get("/ReportsPage/:userEmail", async (req, res) => {
  const { userEmail } = req.params;

  try {
    const pdfReports = await pool.query(
      "SELECT * FROM pdf_reports WHERE user_email = $1",
      [userEmail]
    );
    res.json(pdfReports.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching PDF reports" });
  }
});




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
  const {email, password, license_key } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  let role = 'user';

  if (license_key) {
    const licensePattern = /^HSP-\d{4,5}-\d{4}-IN$/;
    if (licensePattern.test(license_key)){
      role = 'admin';

    }else {
      return res.status(400).json({detail: 'Invalid license key format'});
    }
  }

  try{
    const signUp = await pool.query(`INSERT INTO users (email, hashed_password, role, license_key) VALUES($1, $2, $3, $4)`, [email, hashedPassword, role, license_key]);

    const token = jwt.sign({email, role}, 'secret', {expiresIn: '1hr'})

    res.json({email, role, token})

  }catch (err){
    console.error(err)
    if(err){
      res.json({detail: err.detail})
    }
  }
});



//login
app.post('/login', async (req, res) => {
  const {email, password } = req.body;
  try{
   const users =  await pool.query('SELECT * FROM users WHERE email = $1', [email])
   if (!users.rows.length) return res.json({details: 'User does not exist!'})


    const user = users.rows[0];
    const success = await bcrypt.compare(password, user.hashed_password);
    const token = jwt.sign({email, role: user.role}, 'secret', {expiresIn: '1hr'})

    if(success){
      res.json({'email' : user.email, role: user.role, token})
    }else {
      res.json({detail : "Login failed"})
    }

  }catch (err){
    console.error(err)
  }
});

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (token) {
    jwt.verify(token, 'secret', (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

const authorizeRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.sendStatus(403);
  }
  next();
};


app.get("/AdminPage/:userEmail", authenticateJWT, authorizeRole(['admin']), async (req, res) => {
  const { userEmail } = req.params;

  try {
    const formDataValues = await pool.query(
      "SELECT * FROM formData WHERE user_email = $1",
      [userEmail]
    );
    res.json(formDataValues.rows);
  } catch (err) {
    console.log(err);
  }
});




app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));