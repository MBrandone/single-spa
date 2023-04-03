import { registerApplication, start, LifeCycles } from "single-spa";

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
