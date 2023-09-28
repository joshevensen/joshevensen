import Image from "next/image";

type props = {
  isLarge?: boolean;
};

const JoshAvatar: React.FC<props> = ({ isLarge }) => {
  let imageSize = 40;
  let divClass = "w-10 h-10";

  if (isLarge) {
    imageSize = 64;
    divClass = "w-16 h-16";
  }

  return (
    <div
      className={`${divClass} rounded-full overflow-hidden border-2 border-background`}
    >
      <Image
        src="/images/joshevensen.jpeg"
        alt="Josh Evensen"
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
};

export default JoshAvatar;
