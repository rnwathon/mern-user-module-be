const dotenv = require("dotenv")
const db = require("./db")
const express = require("express")
const app = express()
const cors = require("cors")
const cloudinary = require('cloudinary').v2
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

// Router
const userRouter = require("./routes/user");

// Initiate dotenv
dotenv.config();

// Connect to the database
db.connect(process.env.DB_URL);

console.log(process.env, "ENV")

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

// Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'mern-user-module',
  allowedFormats: ['jpg', 'png'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }]
});

app.use(express.json());
app.use(cors());
app.use(multer({storage: storage}).single('image'))

// API
app.use('/api/v1/user', userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {console.log(`Server is started on PORT: ${PORT}`)})
