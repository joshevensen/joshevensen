import { useRouter } from "next/router";

type props = {
  children: any;
  isOutlined?: boolean;
  href?: string;
  onClick?: () => void;
};

const LibButton: React.FC<props> = ({
  children,
  isOutlined = false,
  href,
  onClick,
}) => {
  const router = useRouter();

  function clickButton() {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  }

  let classes =
    "block rounded-md py-1 px-4 font-bold hover:bg-yellow hover:text-blueDark";

  if (isOutlined) {
    classes += " border-2 border-orange text-orange hover:border-yellow";
  } else {
    classes += " bg-orange text-beige";
  }

  return (
    <button className={classes} type="button" onClick={clickButton}>
      {children}
    </button>
  );
};

export default LibButton;
