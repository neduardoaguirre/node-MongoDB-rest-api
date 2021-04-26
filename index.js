const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json({ extended: true }));
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
