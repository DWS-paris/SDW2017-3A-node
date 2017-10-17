// Importer les composants
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path')

// Définir le port
let port = 8080;

// Importer les modules des routes
let front = require('./routes/front')
let api = require('./routes/api')

// Initier le serveur
let app = express();

// Définir le dossier static de la partie frontend
app.use(express.static(path.join(__dirname, 'www')));

// Configurer body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Définir les modules à utiliser pour les routes
app.use('/', front)
app.use('/api', api)

// Lancer le server
app.listen( port, () => console.log(`Le serveur est lancé sur le port ${port}`) )