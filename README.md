# Medical Sensors Project 🩺

Ce projet déploie une application Kubernetes composée de deux services Node.js :

- **Frontend (medical-sensors)** : une interface web affichant les données de santé.
- **Backend (medical-backend)** : fournit les données dynamiques via une API `/api/hello`.

## ⚙️ Architecture

- Services connectés via **DNS Kubernetes**.
- Exposition du frontend via **Istio Gateway** (`http://medical.local`).
- Base de données **MySQL** connectée au backend.
- Volume Kubernetes monté pour servir du contenu HTML.
- Sécurité : 
  - `RBAC` avec `medical-sa`
  - Proxy sécurisé via **Istio**
  - mTLS activé entre les services

## 📦 Déploiement

1. Construire les images Docker :
   ```bash
   docker build -t medical-sensors:1.0 .
   docker build -t medical-backend:1.0 .
