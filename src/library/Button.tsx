import { useRouter } from "next/router";

type props = {
  children: any;
  isOutlined?: boolean;
  href?: string;
  type?: "button" | "submit";
  color?: string;
  hoverColor?: string;
  isLarge?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  isExternalLink?: boolean;
};

const LibButton: React.FC<props> = ({
  children,
  isOutlined = false,
  href,
  type = "button",
  color,
  hoverColor = "blue-dark",
  isLarge = false,
  onClick,
  disabled = false,
  isExternalLink = false,
}) => {
  const router = useRouter();

  function clickButton() {
    if (href) {
      if (isExternalLink) {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    } else if (onClick) {
      onClick();
    }
  }

  let chosenColor = "orange";

  if (color) chosenColor = color;

  let classes = `block border-2 border-${chosenColor} rounded-md font-bold hover:bg-${hoverColor} hover:border-${hoverColor} hover:text-beige disabled:opacity-50 disabled:border-${chosenColor} disabled:cursor-not-allowed`;

  if (isOutlined) {
    classes += ` bg-transparent text-${chosenColor} disabled:text-${chosenColor} disabled:bg-transparent`;
  } else {
    classes += ` bg-${chosenColor} text-beige disabled:bg-${chosenColor} disabled:text-beige`;
  }

  if (isLarge) {
    classes += " py-0.5 px-4 text-xl";
  } else {
    classes += " py-0.5 px-4";
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
