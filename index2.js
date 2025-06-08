const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Load Firebase credentials
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const itemsCollection = db.collection('items');

// GET items
app.get('/api/items', async (req, res) => {
  const snapshot = await itemsCollection.get();
  const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(items);
});

// POST item
app.post('/api/items', async (req, res) => {
  const newItem = req.body;
  const docRef = await itemsCollection.add(newItem);
  res.status(201).json({ id: docRef.id, ...newItem });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
