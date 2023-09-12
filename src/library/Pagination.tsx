import LibButton from "./Button";

type props = {
  total: number;
  perPage: number;
  currentPage: number;
  label: string;
};

const LibPagination: React.FC<props> = ({
  total,
  perPage,
  currentPage,
  label,
}) => {
  const plural = total !== 1 ? "s" : "";
  const lowerCount = (currentPage - 1) * perPage + 1;
  let higherCount = currentPage * perPage;

  if (higherCount > total) higherCount = total;

  const disablePrev = currentPage <= 1;
  const disableNext = higherCount === total;

  return (
    <div className="flex justify-between mt-4 max-w-4xl pt-3 border-t border-tealLight">
      <p className="text-blueDark">
        Showing {lowerCount} to {higherCount} of {total} {label + plural}
      </p>

      <div className="flex space-x-4">
        <LibButton isOutlined={true} disabled={disablePrev}>
          Prev
        </LibButton>
        <LibButton isOutlined={true} disabled={disableNext}>
          Next
        </LibButton>
      </div>
    </div>
  );
};

export default LibPagination;
