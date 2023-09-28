import { useRouter } from "next/router";

type props = {
  children: any;
  href?: string;
  type?: "button" | "submit";
  iconLeft?: any;
  isSecondary?: boolean;
  isOutlined?: boolean;
  isIconOnly?: boolean;
  isSmall?: boolean;
  isLarge?: boolean;
  isRounded?: boolean;
  isExternalLink?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

const LibButton: React.FC<props> = ({
  children,
  href,
  type = "button",
  iconLeft,
  isSecondary = false,
  isOutlined = false,
  isIconOnly = false,
  isSmall = false,
  isLarge = false,
  isRounded = false,
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

  let border = {
    color: "border-orange",
    hover: "hover:border-orange-dark",
    disabled: "disabled:border-orange-light",
  };
  let background = {
    color: "bg-orange",
    hover: "hover:bg-orange-dark",
    disabled: "disabled:bg-orange-light",
  };
  let text = {
    color: "text-orange",
    hover: "hover:text-orange-dark",
    disabled: "disabled:text-orange-light",
  };

  if (isSecondary) {
    border = {
      color: "border-blue",
      hover: "hover:border-blue-dark",
      disabled: "disabled:border-blue-light",
    };
    background = {
      color: "bg-blue",
      hover: "hover:bg-blue-dark",
      disabled: "disabled:bg-blue-light",
    };
    text = {
      color: "text-blue",
      hover: "hover:bg-blue-dark",
      disabled: "disabled:text-blue-light",
    };
  }

  let classes = `flex items-center border-2 ${border.color} ${border.hover} ${border.disabled} font-bold uppercase tracking-wide disabled:cursor-not-allowed`;

  if (isIconOnly) {
    classes += ` bg-transparent border-none ${text.color} ${text.hover} ${text.disabled}`;
  } else if (isOutlined) {
    classes += ` bg-transparent ${background.hover} ${text.color} hover:text-white ${text.disabled}`;
  } else {
    classes += ` ${background.color} ${background.hover} ${background.disabled} text-white`;
  }

  if (isIconOnly) {
    classes += ` py-1.5 px-2`;
  } else if (isSmall) {
    classes += " py-1 px-4 text-sm";
  } else if (isLarge) {
    classes += " py-2 px-6 text-2xl";
  } else {
    classes += " py-1 px-4";
  }

  if (isRounded) {
    classes += " rounded-full";
  } else {
    classes += " rounded-lg";
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={clickButton}
      disabled={disabled}
    >
      <span className="mr-2 -ml-1">{iconLeft}</span>
      {children}
    </button>
  );
};

export default LibButton;
