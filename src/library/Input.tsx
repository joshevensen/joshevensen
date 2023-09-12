import { Controller, FieldError } from "react-hook-form";

type props = {
  name: string;
  label: string;
  control: any;
  rules: any;
  placeholder?: string;
  error?: FieldError | undefined;
  isMultiline?: boolean;
  type?: "text" | "email" | "tel";
};

const LibInput: React.FC<props> = ({
  name,
  label,
  control,
  rules,
  placeholder,
  error,
  isMultiline = false,
  type = "text",
}) => {
  const inputClasses =
    "block w-full border-0 ring-1 ring-inset ring-beigeDark py-2 px-3 bg-white text-blueDark placeholder:text-teal focus:ring-inset focus:ring-orange";

  return (
    <div>
      <label
        className="block mb-1 px-1 font-bold leading-6 text-blueDark"
        htmlFor={name}
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => {
          if (isMultiline) {
            return (
              <textarea
                className={inputClasses}
                id={name}
                name={name}
                value={value}
                rows={7}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
              />
            );
          }

          return (
            <input
              className={inputClasses}
              id={name}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              type={type}
            />
          );
        }}
      />
      {error && <p className="px-1 text-red">{error.message}</p>}
    </div>
  );
};

export default LibInput;
