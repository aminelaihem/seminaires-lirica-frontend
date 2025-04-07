# Gestion des Séminaires Lirica

## Description
Ce projet est une application web Angular conçue pour gérer et afficher des informations sur divers séminaires. Il utilise Angular pour le frontend et une API Node.js/MongoDB pour le backend, offrant une interface utilisateur riche et interactive.

## Outils et Technologies Utilisés
- **Angular**: Framework frontend pour développer des applications web dynamiques.
- **Node.js**: Environnement d'exécution JavaScript pour le backend.
- **MongoDB**: Base de données NoSQL pour stocker les données des séminaires.
- **Express**: Framework pour créer des serveurs web en Node.js.
- **GSAP**: Bibliothèque pour des animations JavaScript avancées.

## Prérequis
- **Node.js**: Télécharger et installer [Node.js](https://nodejs.org/).
- **MongoDB**: Télécharger et installer [MongoDB](https://www.mongodb.com/try/download/community).

## Configuration du Projet

### Cloner le dépôt
`git clone https://votreRepo.git` puis 
`cd votreRepo`

### Installation des dépendances
- Pour le frontend:
  `cd frontend` puis 
  `npm install`

- Pour le backend:
  `cd backend` puis
  `npm install`


### Configurer la connexion à MongoDB
- Avant de démarrer l'API, assurez-vous que MongoDB est en cours d'exécution sur votre machine. Pour les systèmes Unix/Linux, cela peut souvent être réalisé avec :
  `sudo service mongod start`

- Assurez-vous de configurer le fichier `.env` dans le répertoire du backend pour inclure la chaîne de connexion MongoDB :
  `DB_URI=mongodb://localhost:27017/seminairelirica`

### Lancer l'API Backend
- Assurez-vous que MongoDB est en cours d'exécution.
  `cd backend` puis
  `npm start`

- L'API doit être accessible à `http://localhost:3000`.

### Lancer l'Application Angular
`cd frontend` puis
`ng serve`

- Naviguez à `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez un des fichiers source.

## Structure du Projet
- `frontend/src/app/`: Contient les composants Angular, les services, et les modèles.
- `backend/`: Contient les fichiers du serveur Node.js, les contrôleurs, les modèles de données, et la configuration de la base de données.

## Utilisation
Une fois l'application lancée, vous pouvez visualiser, ajouter, modifier ou supprimer des séminaires à travers l'interface utilisateur. Les interactions avec les séminaires utilisent des animations pour améliorer l'expérience utilisateur.


## Réalisé par
-LAIHEM Amine
-BOUCENNA Yacine
