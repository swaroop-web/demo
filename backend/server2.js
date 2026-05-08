const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors({
    origin: ['https://resilient-brigadeiros-9f8e1b.netlify.app', 'http://localhost:5020'],
    credentials: true
}));
app.use(express.json());

app.use("/", userRoutes);

app.listen(5020, () => {
    console.log("server running");
});