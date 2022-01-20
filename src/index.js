const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//user:question-bank
//pass: syN02llc0WlKpP1j

const uri = "mongodb+srv://question-bank:syN02llc0WlKpP1j@cluster0.qimng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
  try {
    await client.connect();

  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send("data Server has been Connected")
});
app.listen(port, () => {
  console.log("Running Server on Port", port);
})