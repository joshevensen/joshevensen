import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";

import PageContainer from "@/layout/PageContainer";
import PageHero from "@/layout/PageHero";
import LibButton from "@/library/Button";
import LibInput from "@/library/Input";
import { InputType } from "@/data/enums/InputType.enum";

type FormValues = {
  name: string;
  email: string;
  hire: boolean;
  message: string;
};

const defaultValues = {
  name: "",
  email: "",
  hire: false,
  message: "",
};

const HirePage: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: defaultValues });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    reset(defaultValues);
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Josh Evensen | Hire Me</title>
      </Head>

      <PageHero heading="Been around the world, I speak many computer languages...">
        Talk nerdy to me. No really let's talk about what framework to use, how
        to structure a project for future growth, or even about what WYSIWYG
        editor is best.
      </PageHero>

      <PageContainer>
        <div className="max-w-2xl mx-auto lg:max-w-none lg:flex lg:justify-between">
          <div className="mb-8 lg:mb-0 lg:mr-12 prose">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              sequi sunt magnam laborum eligendi ratione animi veniam quod.
              Magni, ipsam explicabo harum id quae deleniti. Quaerat iste
              incidunt ipsam distinctio.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas est
              ea accusantium debitis natus expedita sit nisi, consequuntur
              quisquam labore. Placeat repudiandae reprehenderit sunt magnam
              aliquam ea saepe distinctio rem.
            </p>

            <div className="space-y-2">
              <a
                className="block"
                href="https://github.com/joshevensen"
                target="_blank"
                rel="noopener"
              >
                Github Profile
              </a>
              <a
                className="block"
                href="https://www.upwork.com/freelancers/~01179721661b612701"
                target="_blank"
                rel="noopener"
              >
                Upwork Profile
              </a>
            </div>
          </div>

          <div>
            <form
              className="lg:w-[40rem] space-y-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <LibInput
                name="name"
                label="Name"
                control={control}
                rules={{ required: "Name is required" }}
                error={errors.name}
              />

              <LibInput
                name="email"
                label="Email"
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

              <div className="flex justify-end">
                <LibButton type="submit">Let's Talk</LibButton>
              </div>
            </form>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default HirePage;
