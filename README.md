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
url de cart-app : single-spa-cart.vercel.app
url de product-list : single-spa-product-list.vercel.app
