const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello depuis le backend médical 🧠" });
});

app.listen(port, () => {
  console.log(`Backend médical en ligne sur le port ${port}`);
});
