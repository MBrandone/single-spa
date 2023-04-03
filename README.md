# README

Ceci est un repo qui vous montrera comment créer des micro-frontends avec single-spa

L'application est composé de 3 app-parcel selon single-spa : 

- L'application shell qui fournit le index.html qui est livré et d'orchestrer l'affichage de différent micro-frontend
- L'application product-list qui est une spa qui donne une list de produit
- L'application cart qui est un panier

Ce sont 3 applications qui ont leurs propres cycles de vie

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

# Deploiement

On a décidé de deployer sur vercel
Pour voir le deploiement des applis : https://vercel.com/dashboard
Le repo du projet sur public github de Brandone : https://github.com/MBrandone/single-spa

url de cart-app : single-spa-cart.vercel.app
url de product-list : single-spa-product-list.vercel.app

- Vercel gère le build de chacunes des apps
- Dans un meme git, il peut aller chercher un dossier spécifique du repo
- Truc moins cool associé, on redeploie les 3 apps meme si y en a qu'une qui change => Faut pousser un peu plus voir si on peut les rendre indépendant
- config de deploy sur create-react-app sur les 3 apps => pour que quand on y rentre sur une url precise, il nous donne l'application shell
- Ne pas oublier de mettre l'url de l'application shell dans l'index.ejs (on a du faire un premier deploy pour l'avoir. Si t'as un DNS c'est ok, si tu connais pas avant c'est non)
- husky install qui a fait chier https://typicode.github.io/husky/#/?id=custom-directory
- configuration des CSP, on doit préciser dans le html de l'application shell les CSP. On a eu un problème de CORS quand on a voulu faire une requete http.

à pousser :
ne pas mettre l'import map dans l'index.ejs, mais dans un fichier à côté et l'importer : https://github.com/WICG/import-maps
