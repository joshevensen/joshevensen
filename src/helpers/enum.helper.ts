import IOption from "@/data/interfaces/option.interface";

export function getEnumOptions<Type extends { [key: string]: string }>(
  enumObject: Type
) {
  const options: IOption[] = [];

  const keys = Object.keys(enumObject);
  const values = Object.values(enumObject);

  keys.forEach((key, index) => {
    options.push({
      value: key,
      label: values[index],
    });
  });

  return options;
}
