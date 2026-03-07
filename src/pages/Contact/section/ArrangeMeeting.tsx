import { Button, Input, Select } from "@/components";
import { useState } from "react";
import { useFormik } from "formik";
import { MeetingFormValidations } from "@/Schema";
import { sendMeetingEmail } from "../EmailJS/meetingEmail";


const tags = ["Project discussion", "Consultation", "Technical support", "Long-term planning"];

export default function StrategyCallForm() {
  const [selectedTag, setSelectedTag] = useState("");

  const initialValues = {
    meetingType: "",
    preferredDate: "",
    preferredTime: "",
    timezone: "",
    description: "",
    tag: "",
    email: "",
  };

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
    validationSchema: MeetingFormValidations,
   onSubmit: async (values, actions) => {
  const response = await sendMeetingEmail(values);
  if (response.success) {
    console.log("Email sent successfully");
    actions.resetForm();
    setSelectedTag("");
  } else {
    console.error("Failed to send email", response.error);
  }
},
  });

  return (
    <div id="meeting" className="min-h-screen px-4 sm:px-6 lg:px-8 text-primary">
      <div className="max-w-6xl mx-auto bg-white p-8">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4 text-center">
          Book a Strategy Call
        </h1>
        <p className="text-muted-foreground mb-8 text-center">
          Prefer a conversation? Schedule a meeting to discuss your project,
          troubleshoot a problem, or explore how we can work together.
        </p>

        {/* Tags */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-4 text-xs py-2 rounded-full border transition-colors ${
                selectedTag === tag
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Form */}
        <form
          className="w-full grid gap-y-8 md:grid-cols-2 md:gap-x-6 p-8"
          onSubmit={handleSubmit}
        >

          {/* Meeting Type */}
          <div className="md:col-span-2">
            <Select
              id="meetingType"
              label="Meeting Type"
              placeholder="Select meeting type"
              groupLabel="Duration"
              options={[
                { label: "30 Minutes — Quick sync", value: "30min" },
                { label: "60 Minutes — Full discussion", value: "60min" },
                { label: "90 Minutes — Deep dive", value: "90min" },
              ]}
              value={values.meetingType}
              onChange={(v: string) => {
                setFieldValue("meetingType", v);
                setFieldTouched("meetingType", true, false);
              }}
            />
            {touched.meetingType && errors.meetingType && (
              <p className="text-xs pl-5 text-red-600">{errors.meetingType}</p>
            )}
          </div>

          <div>
            <Input
              InputType="date"
              label="Preferred Date"
              id="preferredDate"
              name="preferredDate"
              value={values.preferredDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.preferredDate && errors.preferredDate && (
              <p className="text-xs pl-5 text-red-600">{errors.preferredDate}</p>
            )}
          </div>

          <div>
            <Input
              InputType="time"
              label="Preferred Time"
              isRequired={true}
              id="preferredTime"
              name="preferredTime"
              value={values.preferredTime}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.preferredTime && errors.preferredTime && (
              <p className="text-xs pl-5 text-red-600">{errors.preferredTime}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <Select
              id="timezone"
              label="Your Timezone"
              placeholder="Select timezone"
              groupLabel="Timezones"
              options={[
                { label: "EST (UTC-5)", value: "EST" },
                { label: "CST (UTC-6)", value: "CST" },
                { label: "MST (UTC-7)", value: "MST" },
                { label: "PST (UTC-8)", value: "PST" },
                { label: "GMT (UTC+0)", value: "GMT" },
                { label: "CET (UTC+1)", value: "CET" },
                { label: "PKT (UTC+5)", value: "PKT" },
                { label: "IST (UTC+5:30)", value: "IST" },
              ]}
              value={values.timezone}
              onChange={(v: string) => {
                setFieldValue("timezone", v);
                setFieldTouched("timezone", true, false);
              }}
            />
            {touched.timezone && errors.timezone && (
              <p className="text-xs pl-5 text-red-600">{errors.timezone}</p>
            )}
          </div>
          <div>
            <Input
              InputType="email"
              label="Email Address"
              isRequired={true}
              id="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="text-xs pl-5 text-red-600">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-y-2 md:col-span-2">
            <label className="font-semibold" htmlFor="description">
              What would you like to cover?
            </label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={6}
              placeholder="Share a brief overview of your project, challenge, or questions. Links are welcome."
              className="w-full border-2 rounded-lg p-3 text-sm outline-none focus:border-blue-500 resize-none"
            />
            <p className="text-gray-500 text-sm">
              The more context you share, the better we can prepare for your call.
            </p>
            {touched.description && errors.description && (
              <p className="text-xs pl-1 text-red-600">{errors.description}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:col-span-2">
            <Button type="submit" label="Request Meeting" />
            <p className="text-gray-600 text-sm cursor-pointer">
              You'll receive a confirmation email with the meeting details or an
              alternative time if needed.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}