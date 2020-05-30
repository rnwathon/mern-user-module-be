const dotenv = require("dotenv")
const db = require("./db")
const express = require("express")
const app = express()
const cors = require("cors")

// Router
const userRouter = require("./routes/user");

// Initiate dotenv
dotenv.config();

// Connect to the database
db.connect(process.env.DB_URL);

app.use(express.json());
app.use(cors());

// API
app.use('/api/v1/user', userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`Server is started on PORT: ${PORT}`)})
