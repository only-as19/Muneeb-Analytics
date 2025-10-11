import * as Yup from "yup"

export const FormValidations = Yup.object({
    name: Yup.string().min(2).max(20).required("Please Enter you name"),
    number: Yup.number().required("Please Enter YOur number"),
    email: Yup.string().email().required("Please Enter your email"),
    service: Yup.string().required("Please select a service"),
    location: Yup.string().required("Please select a location"),
    budget: Yup.string().min(2).required("Please Enter your Budget"),
    message: Yup.string().max(500,"Message cannot be longer than 500 characters")
})