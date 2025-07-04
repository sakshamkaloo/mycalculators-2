const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = 'mongodb+srv://userjr:uqFJtmlBVxVceTHM@cluster0.yhgtmxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DB_NAME = 'calcApp';
const COLLECTION = 'calculations';
const client = new MongoClient(MONGO_URI);

async function connectDB() {
  await client.connect();
  console.log('MongoDB connected');
}
connectDB();

app.post('/api/log', async (req, res) => {
  const db = client.db(DB_NAME);
  const result = await db.collection(COLLECTION).insertOne({
    ...req.body,
    date: new Date(),
  });
  res.json(result.insertedId);
});

app.get('/api/history', async (req, res) => {
  const { type = '', page = 1, limit = 5 } = req.query;
  const db = client.db(DB_NAME);
  const filter = type ? { type } : {};
  const skip = (parseInt(page) - 1) * parseInt(limit);
  const total = await db.collection(COLLECTION).countDocuments(filter);
  const data = await db.collection(COLLECTION)
    .find(filter)
    .sort({ date: -1 })
    .skip(skip)
    .limit(parseInt(limit))
    .toArray();
  res.json({ total, data });
});

app.listen(5000, () => console.log('Server running at http://localhost:5000'));
