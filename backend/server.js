//require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const ProductRoutes = require("./routes/productRoutes");
connectDB();
const app = express();
app.use(express.json()); //middle ware
//app.use('/api/mern-shopping-product', ProductRoutes); //This is wrong (Failed to load resource: the server responded with a status of 404 (Not Found))
app.use("/api/products", ProductRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//http://localhost:5000/api/products
