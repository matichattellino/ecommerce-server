const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
var cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const expressValidator = require("express-validator");


//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

//app
const app = express();

app.use(cors());

//database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log("Database connected"))

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//routes middleware
app.use("/api", authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})



