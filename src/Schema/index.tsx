import * as Yup from "yup"

export const FormValidations = Yup.object({
    name: Yup.string().min(2).max(20, "Name cannot be longer than 20 characters").required("Please enter your name"),
    number: Yup.number().required("Please enter your phone number"),
    email: Yup.string().email().required("Please enter your email address"),
    service: Yup.string().required("Please select a service"),
    location: Yup.string().required("Please select a location"),
    budget: Yup.string().min(2).required("Please enter your budget"),
    message: Yup.string().max(500, "Message cannot be longer than 500 characters")
})

export const MeetingFormValidations = Yup.object({
  meetingType: Yup.string().required("Please select a meeting type"),
  preferredDate: Yup.string().required("Please select a preferred date"),
  preferredTime: Yup.string().required("Please select a preferred time"),
  timezone: Yup.string().required("Please select your timezone"),
  email: Yup.string().email().required("Please enter your email address"),
  description: Yup.string().max(500, "Description cannot be longer than 500 characters"),
});