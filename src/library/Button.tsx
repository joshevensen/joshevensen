import { useRouter } from "next/router";

type props = {
  children: any;
  isOutlined?: boolean;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const LibButton: React.FC<props> = ({
  children,
  isOutlined = false,
  href,
  type = "button",
  onClick,
  disabled = false,
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
    "block border-2 border-orange rounded-md py-0.5 px-4 font-bold hover:bg-yellow hover:border-yellow hover:text-blueDark disabled:opacity-50 disabled:border-orange disabled:cursor-not-allowed";

  if (isOutlined) {
    classes +=
      " bg-transparent text-orange disabled:text-orange disabled:bg-transparent";
  } else {
    classes += " bg-orange text-beige disabled:bg-orange disabled:text-beige";
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={clickButton}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default LibButton;
