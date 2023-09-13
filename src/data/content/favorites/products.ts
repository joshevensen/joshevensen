import { FavoriteType } from "@/data/enums/FavoriteType.enum";
import { Favorite } from "@/data/models/Favorite";

const type = FavoriteType.Product;

export default [
  new Favorite(
    "Ergodox",
    "An expensive but amazing keyboard",
    {
      display: "ergodox-ex.com",
      link: "https://ergodox-ex.com",
    },
    type
  ),
];
