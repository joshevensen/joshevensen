import { Favorite } from "@/data/models/Favorite";
import LibButton from "@/library/Button";

type props = {
  favorite: Favorite;
  color: string;
};

const FavoriteItem: React.FC<props> = ({ favorite, color }) => {
  const headerColor = "bg-" + color;
  return (
    <div className="flex flex-col bg-beige-dark">
      <div className={`${headerColor} py-3 px-4`}>
        <h3 className="text-3xl text-beige text-center font-bold">
          {favorite.name}
        </h3>
      </div>

      <div className="flex flex-col items-center justify-between flex-grow m-4 gap-4">
        <div className="w-full">
          <p>{favorite.description}</p>
        </div>

        <LibButton
          href={favorite.link.link}
          isExternalLink={true}
          color={color}
          isLarge={true}
        >
          Check It Out
        </LibButton>
      </div>
    </div>
  );
};

export default FavoriteItem;
