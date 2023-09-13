import { FavoriteType } from "@/data/enums/FavoriteType.enum";
import { Favorite } from "@/data/models/Favorite";

const type = FavoriteType.Software;

export default [
  new Favorite(
    "PhpStorm",
    "Yep, I have two favorite editors.",
    {
      display: "jetbrains.com/phpstorm",
      link: "https://jetbrains.com/phpstorm",
    },
    type
  ),
  new Favorite(
    "VSCode",
    "This is my goto editor for client side projects.",
    {
      display: "code.visualstudio.com",
      link: "https://code.visualstudio.com",
    },
    type
  ),
];
