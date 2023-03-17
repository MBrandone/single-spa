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
  name: "@brm/other-react-app",
  app: () => System.import<LifeCycles>("@brm/other-react-app"),
  activeWhen: ["/other-react-app"],
});

registerApplication({
  name: "@brm/react-app",
  app: () => System.import<LifeCycles>("@brm/react-app"),
  activeWhen: ["/react"],
});

start({
  urlRerouteOnly: true,
});
