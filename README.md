# README

Ceci est un repo qui vous montrera comment créer des micro-frontends avec single-spa

L'application est composée de 3 `app-parcel` selon single-spa : 

- L'`application-shell` qui fournit l'index.html qui est livré et d'orchestrer l'affichage de différents micro-frontends
- L'application `product-list` qui est une SPA qui donne une liste de produit
- L'application `cart` qui est un panier

Ce sont 3 applications qui ont leurs propres cycles de vie.

## Pour lancer l'application

### Installer les dépendances
```
cd application-shell && npm install
```
```
cd app-cart && npm install
```
```
cd product-list-app && npm install
```
### Lancer l'application-shell
```
cd application-shell && npm start
```
### Lancer les deux autres micro-frontend
```
cd product-list-app && npm start
```
```
cd cart-app && npm start
```

# Déploiement

Les 3 applications sont déployées sur Vercel.
Vous pouvez suivre leurs déploiements [ici](https://vercel.com/dashboard)
Le repo du projet sur public [github de Brandone](https://github.com/MBrandone/single-spa)

Pour voir les applications déployées : 
- [application-shell](https://single-spa-application-shell.vercel.app/)
- [cart-app](https://single-spa-cart.vercel.app/)
- [product-list](https://single-spa-product-list.vercel.app/)

Pour compléter les informations sur le déploiement avec Vercel : 
- Vercel gère le build de chacun-es des applications, on a juste à renseigner le repo github, un déploiement se lance à chaque commit sur master.
- Dans un meme git, il peut aller chercher un dossier spécifique du repo
- Truc moins cool associé, les 3 apps sont redéployés quand un nouveau commit sur le repo est fait. Il faudrait chercher un peu plus pour les rendre indépendants.
- On a mi une configuration de déploiement `create-react-app` sur les 3 apps, afin qu'il nous donne l'application shell peu importe l'URL cherché. 
- Ne pas oublier de mettre l'URL de l'application shell dans l'index.ejs (on a dû faire un premier deploy pour l'avoir). Si on possède un DNS, cela résout le problème, sinon, le changement doit être fait.

Problèmes rencontrés :
- husky install qui a fait chier https://typicode.github.io/husky/#/?id=custom-directory
- configuration des CSP, on doit préciser dans le html de l'application shell les CSP. On a eu un problème de CORS quand on a voulu faire une requête HTTP.

Sujet que l'on pourrait améliorer :
- ne pas mettre l'import map dans l'index.ejs, mais dans un fichier à côté et l'importer : https://github.com/WICG/import-maps
- Déploiement quand commit dans l'un des dossiers.