import { Button, Input, Select } from "@/components";
import { CircleArrowOutUpRight } from "lucide-react";
import countriesRaw from "world-countries";
import { useFormik } from "formik";
import { FormValidations } from "@/Schema";
import { sendEmail } from "../EmailJS/emailjs";
const ContacForm = () => {
  const initialValues = {
    name: "",
    email: "",
    number: "",
    company: "",
    service: "",
    location: "",
    budget: "",
    message: "",
  };

  const countries = countriesRaw
    .map((country) => ({
      label: country.name.common,
      value: country.name.common,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues,
    validationSchema: FormValidations,
    onSubmit: async (values, actions) => {
      const response = await sendEmail(values);
      if (response.success) {
        console.log("Email sent successfully");
        actions.resetForm();
      } else {
        console.error("Failed to send email", response.error);
      }

      console.log(values);
      actions.resetForm();
    },
  });
  console.log(errors);

  return (
    <section className="min-h-screen p-5 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            Here to Help You Move Forward
          </h1>
          <p className="text-muted-foreground md:mt-2">
            Reach out with your questions or project details, we&apos;ll get
            back to you within 24 hours with clear next steps.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-4 md:gap-x-4">
          <div className="flex flex-col justify-center items-center p-10 gap-y-2 text-center md:text-left bg-bg-secondary">
            <h1 className="md:text-4xl text-2xl font-bold">
              Lorem, ipsum dolor
            </h1>
            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur sunt veritatis, maiores necessitatibus nulla quidem!
            </p>
            <Input
              InputType="text"
              placeholder="Enter your request"
              button={{
                buttonLabel: "send",
                buttonVariant: "outline",
              }}
              className="bg-white"
            />
            <div className="flex items-center gap-x-2">
              <Button
                label="Video Meeting Appointment"
                icon={<CircleArrowOutUpRight className="!h-4 !w-4" />}
                variant="secondary"
              />
              <Button label="xyz" />
            </div>
          </div>
          <form
            className="w-full grid gap-y-8 md:grid-cols-2 md:gap-x-6"
            onSubmit={handleSubmit}
          >
            <div>
              <Input
                InputType="text"
                label="Name"
                placeholder="Enter your name"
                customClass="w-full"
                isRequired={true}
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {touched.name && errors.name ? (
                <p className="text-xs pl-5 text-red-600">{errors.name}</p>
              ) : null}
            </div>
            <div>
              <Input
                InputType="number"
                label="Number"
                placeholder="Enter your Number"
                isRequired={true}
                name="number"
                id="number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.number && errors.number ? (
                <p className="text-xs pl-5 text-red-600">{errors.number}</p>
              ) : null}
            </div>

            <div>
              <Input
                InputType="email"
                label="Email Address"
                placeholder="Enter your Email"
                isRequired={true}
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? (
                <p className="text-xs pl-5 text-red-600">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <Input
                InputType="text"
                label="Company Name"
                placeholder="Company (optional)"
                name="company"
                id="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <Select
                id="service"
                label="Services"
                placeholder="Services you interested"
                groupLabel="services"
                options={[
                  {
                    label: "Power BI Dashboards & Reports",
                    value: "Power BI Dashboards & Reports",
                  },
                  {
                    label: "End to End Data Analytics Solutions",
                    value: "Analytics Solutions",
                  },
                  {
                    label: "Predictive Analytics (Python & Machine Learning)",
                    value: "Predictive Analytics",
                  },
                  {
                    label: "Statistical and Exploratory Data Analysis",
                    value: "tatistical and Exploratory Data Analysis",
                  },
                  {
                    label: "Tableau Dashboards & Reports",
                    value: "Tableau Dashboards & Reports",
                  },
                  {
                    label: "Data analytics Training",
                    value: "Data analytics Training",
                  },
                  {
                    label: "Others",
                    value: "Others",
                  },
                ]}
                value={values.service}
                onChange={(v: string) => {
                  setFieldValue("service", v);
                  setFieldTouched("service", true, false);
                }}
              />
              {touched.service && errors.service ? (
                <p className="text-xs pl-5 text-red-600">{errors.service}</p>
              ) : null}
            </div>
            <div>
              <Select
                label="Location"
                placeholder="Select location"
                groupLabel="All countries"
                options={countries}
                id="location"
                value={values.location}
                onChange={(v: string) => {
                  setFieldValue("location", v);
                  setFieldTouched("location", true, false);
                }}
              />
              {touched.location && errors.location ? (
                <p className="text-xs pl-5 text-red-600">{errors.location}</p>
              ) : null}
            </div>
            <div>
              <Input
                InputType="text"
                label="Budget"
                placeholder="What's your Budget"
                isRequired={true}
                name="budget"
                id="budget"
                value={values.budget}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.budget && errors.budget ? (
                <p className="text-xs pl-5 text-red-600">{errors.budget}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-y-2 md:col-span-2">
              <label className="font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="h-20 w-full border-2 rounded p-2 text-sm"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {touched.message && errors.message ? (
                <p className="text-xs pl-5 text-red-600">{errors.message}</p>
              ) : null}
            </div>
            <Button
              type="submit"
              label="Send Email"
              className="md:col-span-2"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContacForm;
