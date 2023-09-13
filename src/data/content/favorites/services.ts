import { FavoriteType } from "@/data/enums/FavoriteType.enum";
import { Favorite } from "@/data/models/Favorite";

const type = FavoriteType.Service;

export default [
  new Favorite(
    "Digital Ocean",
    "Some may like AWS, but I prefer an underdog that cares about it's customers.",
    {
      display: "digitalocean.com",
      link: "https://digitalocean.com",
    },
    type
  ),
];
