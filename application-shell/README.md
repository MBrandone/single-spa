# README

Ceci est un single-spa root config.
ça permet de gérer plusieurs MFE dans une seule appli.

Elle va chercher une appli qui s'appelle `single-spa-03-03` pour après l'afficher dans une route

Ce projet a deux responsabilités :
- Il a le index.html où va se rendre toutes les autres applications dit micro-frontend
- Il enregistre les différentes applications qu'il est capable de rendre

# Pour lancer l'appli en local

```
npm start
```

L'application tourne par défaut sur le port 9000

Comme on peut le voir dans index.ejs,
Il affiche dans /react, une appli qui tourne sur le port 8500.

