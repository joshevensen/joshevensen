import { FavoriteType } from "@/data/enums/FavoriteType.enum";
import { Favorite } from "@/data/models/Favorite";

const type = FavoriteType.Framework;

export default [
  new Favorite(
    "Laravel",
    "This is the first major framework I learned way back in the beginning and it will always hold a special place in my heart",
    {
      display: "laravel.com",
      link: "https://laravel.com",
    },
    type
  ),
];
