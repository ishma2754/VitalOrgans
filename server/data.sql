CREATE DATABASE vitalsdata;

CREATE TABLE formData (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(255),
  name VARCHAR(255),
  age INTEGER,
  emergencyContact VARCHAR(255),
  gender VARCHAR(10),
  medicalConditions TEXT,
  bloodGroup VARCHAR(5)
);

CREATE TABLE inputValues (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(255),
  bpSys INTEGER,
  bpDia INTEGER,
  pulseRate INTEGER,
  totalCholesterol INTEGER,
  hdlCholesterol INTEGER,
  ldlCholesterol INTEGER,
  bloodGlucoseFasting INTEGER,
  bloodGlucosePP INTEGER,
  creatinine INTEGER,
  date DATE
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);