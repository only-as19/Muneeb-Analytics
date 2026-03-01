import * as Yup from "yup"

export const FormValidations = Yup.object({
    name: Yup.string().min(2).max(20).required("Please enter your name"),
    number: Yup.number().required("Please enter your number"),
    email: Yup.string().email().required("Please enter your email"),
    service: Yup.string().required("Please select a service"),
    location: Yup.string().required("Please select a location"),
    budget: Yup.string().min(2).required("Please Enter your budget"),
    message: Yup.string().max(500,"Message cannot be longer than 500 characters")
})