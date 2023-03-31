import { useState } from "react";

type PanierItem = {
  nom: string;
};

export default function Root() {
  const [panierItem] = useState<PanierItem[]>([{ nom: "une blague" }]);
  // eslint-disable-next-line no-console
  console.log("panier");
  return (
    <>
      <h1>Mon panier</h1>
      <ul>
        {panierItem &&
          panierItem.map((item, index) => {
            return <li key={index.toString()}>{item.nom} </li>;
          })}
      </ul>
    </>
  );
}
