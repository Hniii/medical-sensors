const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (CSS + JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', async (req, res) => {
  let backendMessage = 'non disponible ❌';

  try {
    const backendResponse = await axios.get('http://medical-backend/api/hello');
    backendMessage = backendResponse.data.message;
  } catch (error) {
    console.error("Erreur lors de l'appel au backend:", error.message);
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Dashboard Médical</title>
      <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
      <div class="sidebar">🩺 Menu</div>
      <div class="main">
        <h1>Bienvenue !!!!👩‍⚕️</h1>
        <p>Voici votre tableau de bord médical.</p>
        <div class="card">💓 Capteurs cardiaques actifs : 3</div>
        <div class="card">🌡️ Température moyenne : 36.7°C</div>
        <div class="card">🧠 Message du backend : ${backendMessage}</div>
      </div>
      <script src="js/main.js"></script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Dashboard médical en ligne sur le port ${port}`);
});
