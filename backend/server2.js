const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors({
    origin: ['https://resilient-brigadeiros-9f8e1b.netlify.app', 'http://localhost:5020'],
    credentials: true
}));
app.use(express.json());

app.use("/", userRoutes);



app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
