type props = {
  isWide?: boolean;
};

const PostSummary: React.FC<props> = ({ isWide = false }) => {
  let dateClasses = "text-blue";
  let summaryClasses = "";

  if (isWide) {
    dateClasses += " flex-shrink-0 w-48 pt-4";
  } else {
    dateClasses += " pl-3 text-sm";
  }

  return (
    <div className={isWide ? "flex" : ""}>
      <p className={dateClasses}>September 5, 2023</p>

      <div className="p-3 cursor-pointer hover:bg-beigeDark">
        <h3 className="mb-1 text-3xl font-bold">
          Crafting a design system for a multiplanetary future
        </h3>

        <p>
          Most companies try to stay ahead of the curve when it comes to visual
          design, but for Planetaria we needed to create a brand that would
          still inspire us 100 years from now when humanity has spread across
          our entire solar system.
        </p>

        <p className="mt-4 text-sm text-orange">Read Article {">"}</p>
      </div>
    </div>
  );
};

export default PostSummary;
