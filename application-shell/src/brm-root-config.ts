import { registerApplication, start, LifeCycles } from "single-spa";

//registerApplication({
//  name: "@single-spa/welcome",
//  app: () =>
//    System.import<LifeCycles>(
//      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//    ),
//  activeWhen: ["/"],
// });

//registerApplication({
//  name: "@brm/navbar",
//  app: () => System.import("@brm/navbar"),
//  activeWhen: ["/"]
//});

registerApplication({
  name: "@brm/cart-app",
  app: () => System.import<LifeCycles>("@brm/cart-app"),
  activeWhen: ["/panier"],
});

registerApplication({
  name: "@brm/product-list-app",
  app: () => System.import<LifeCycles>("@brm/product-list-app"),
  activeWhen: ["/liste-produits"],
});

start({
  urlRerouteOnly: true,
});
