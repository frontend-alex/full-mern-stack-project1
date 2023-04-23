const express = require("express");
const db = require("./Config/db");
const cors = require('cors');

const router = require('./router');

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use(router)

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server has started on: http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));
