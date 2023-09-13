import FavoriteItem from "@/components/FavoriteItem";
import favorites from "@/data/content/favorites";
import { FavoriteType } from "@/data/enums/FavoriteType.enum";
import { InputType } from "@/data/enums/InputType.enum";
import { Favorite } from "@/data/models/Favorite";
import { getColor } from "@/helpers/color.helper";
import { getEnumOptions } from "@/helpers/enum.helper";
import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import LibInput from "@/library/Input";
import Head from "next/head";
import { useState } from "react";

const FavoritesPage: React.FC = () => {
  const [filter, setFilter] = useState<FavoriteType | undefined>(undefined);

  const filteredFavorites = Favorite.filter(favorites, filter);

  const filterOptions = [
    { value: undefined, label: "All Favorites" },
    ...getEnumOptions(FavoriteType),
  ];

  function toggleFilter<event>(event: any) {
    setFilter(FavoriteType[event.target.value as keyof typeof FavoriteType]);
  }

  return (
    <>
      <Head>
        <title>Josh Evensen | Favorites</title>
      </Head>

      <PageHero heading="These are a few of my favorite things">
        From editors, to keyboards and everything in between these are some of
        my favorites.
      </PageHero>

      <PageContainer>
        <div className="flex justify-end -mt-8">
          <LibInput
            name="filter"
            label="Filter"
            type={InputType.Select}
            options={filterOptions}
            onChange={toggleFilter}
            isInline={true}
          />
        </div>

        <div className="grid grid-cols-3 gap-8 mt-10">
          {filteredFavorites.map((favorite, index) => (
            <FavoriteItem
              key={index}
              favorite={favorite}
              color={getColor(index)}
            />
          ))}
        </div>
      </PageContainer>
    </>
  );
};

export default FavoritesPage;
