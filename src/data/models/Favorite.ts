import { FavoriteType } from "../enums/FavoriteType.enum";
import { IAffiliateLink } from "../interfaces/affiliate-link.interface";

export class Favorite {
  constructor(
    public name: string,
    public description: string | null,
    public link: IAffiliateLink,
    public type: FavoriteType,
    public imageURL?: string | null
  ) {}

  static filter(favorites: Favorite[], type: FavoriteType | undefined) {
    if (!type) {
      return favorites;
    }

    return favorites.filter((favorite) => favorite.type === type);
  }
}
