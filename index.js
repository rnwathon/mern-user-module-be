const dotenv = require("dotenv")
const db = require("./db")

// Initiate dotenv
dotenv.config();

// Connect to the database
db.connect(process.env.DB_URL)

