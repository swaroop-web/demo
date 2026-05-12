require('dotenv').config();

const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: [
        'https://crud-dem.netlify.app/',
        'http://localhost:5020'
    ],
    credentials: true
}));

app.use(express.json());

app.use("/", userRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});