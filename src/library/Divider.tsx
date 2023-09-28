type props = {
  className?: string;
};

const LibDivider: React.FC<props> = ({ className }) => {
  return (
    <hr className={`my-12 border-0 border-b border-beige-300 ${className}`} />
  );
};

export default LibDivider;
