import { InputType } from "@/data/enums/InputType.enum";
import { IContactData } from "@/data/interfaces/contactData.interface";
import LibButton from "@/library/Button";
import LibInput from "@/library/Input";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const ContactForm: React.FC = () => {
  const defaultValues: IContactData = {
    name: "",
    email: "",
    hire: false,
    message: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactData>({ defaultValues });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit: SubmitHandler<IContactData> = (data) => {
    setIsButtonDisabled(true);

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitMessage(data.message);
        setTimeout(() => {
          setSubmitMessage("");
        }, 3000);
        reset(defaultValues);
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  return (
    <form
      className="grow p-4 space-y-4 md:space-y-6 md:p-6 lg:py-8 lg:px-10 rounded-md md:rounded-2xl bg-blue-dark text-background"
      onSubmit={handleSubmit(onSubmit)}
    >
      <LibInput
        name="name"
        label="Name"
        placeholder="e.g. John Doe"
        control={control}
        rules={{ required: "Name is required" }}
        error={errors.name}
      />

      <LibInput
        name="email"
        label="Email"
        placeholder="e.g. john@gmail.com"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        error={errors.email}
        type={InputType.Email}
      />

      <LibInput
        name="message"
        label="Message"
        control={control}
        rules={{ required: "Message is required" }}
        error={errors.message}
        type={InputType.Multiline}
      />

      <div className="flex flex-wrap items-center justify-center md:justify-start md:flex-row-reverse">
        <LibButton type="submit" isLarge={true} disabled={isButtonDisabled}>
          Send Message
        </LibButton>

        <p className="mt-3 md:mt-0 mr-6 text-center md:text-right text-xl md:text-2xl text-green-light">
          {submitMessage}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
