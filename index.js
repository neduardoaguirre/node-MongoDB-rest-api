const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');

const app = express();
connectDB();
app.use(cors());
app.use(express.json({ extended: true }));
const port = process.env.PORT || 4000;

app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
