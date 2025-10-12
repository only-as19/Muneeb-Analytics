import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY;

interface sendEmailProps {
  name: string;
  email: string;
  company: string;
  service: string;
  location: string;
  budget: string;
  message: string;
  [key: string]: unknown;
}

export const sendEmail = async (values: sendEmailProps) => {
  try {
    const autoReplyParams = {
      ...values,
      company_name: "Muneeb Anakytics",
      to_mail: "hellohello51981@gmail.com",
    };
    const res = await emailjs.send(serviceId, templateId, autoReplyParams, {
      publicKey,
    });
    return {
      success: true,
      status: res.status,
      text: res.text,
    };
  } catch (error) {
    console.error("EmailJS error:", error);
    return {
      success: false,
      error,
    };
  }
};
