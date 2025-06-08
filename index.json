import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';
import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync('./firebase-key.json', 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());

const rsvpCollection = db.collection('rsvps');

app.post('/api/rsvp', async (req, res) => {
  const { name, email, attending } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Missing fields' });

  const newDoc = await rsvpCollection.add({ name, email, attending });
  res.status(201).json({ id: newDoc.id, name, email, attending });
});

app.get('/api/rsvps', async (req, res) => {
  const snapshot = await rsvpCollection.get();
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
