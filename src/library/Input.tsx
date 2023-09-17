import { InputType } from "@/data/enums/InputType.enum";
import IOption from "@/data/interfaces/option.interface";
import { Controller, FieldError } from "react-hook-form";

type props = {
  name: string;
  label: string;
  control?: any;
  rules?: any;
  placeholder?: string;
  error?: FieldError | undefined;
  type?: InputType;
  options?: IOption[];
  value?: string;
  onChange?: (...event: any[]) => void;
  isInline?: boolean;
};

type inputProps = {
  type?: InputType;
  name: string;
  className: string;
  value?: string;
  onChange?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  options?: IOption[];
};

const Inputs: React.FC<inputProps> = ({
  type,
  name,
  className,
  value,
  placeholder,
  onChange,
  onBlur,
  options,
}) => {
  if (type === InputType.Multiline) {
    return (
      <textarea
        className={className}
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

  if (type === InputType.Select) {
    return (
      <select
        className={className}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options!.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      className={className}
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
    />
  );
};

const LibInput: React.FC<props> = ({
  name,
  label,
  control,
  rules,
  placeholder,
  error,
  type = InputType.Text,
  options,
  value,
  onChange,
  isInline = false,
}) => {
  let inputClasses =
    "block border-0 ring-1 ring-inset ring-beige-dark py-2 pl-3 bg-white text-blue-dark placeholder:text-teal focus:ring-inset focus:ring-orange";

  let fieldClasses = "";

  if (isInline) {
    fieldClasses = "flex items-center";
    inputClasses += " ml-2";
  } else {
    inputClasses += " w-full";
  }

  if (type !== InputType.Select) {
    inputClasses += " pr-3";
  }

  return (
    <div className={fieldClasses}>
      <label
        className="block mb-1 px-1 font-bold leading-6 text-blue-dark"
        htmlFor={name}
      >
        {label}
      </label>

      {control && (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputs
              type={type}
              name={name}
              className={inputClasses}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              options={options}
            />
          )}
        />
      )}

      {!control && (
        <Inputs
          type={type}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          options={options}
        />
      )}

      {error && <p className="px-1 text-red">{error.message}</p>}
    </div>
  );
};

export default LibInput;
