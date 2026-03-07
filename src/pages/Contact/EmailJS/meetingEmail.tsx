import emailjs from "@emailjs/browser";

const meetingTemplateId = import.meta.env.VITE_PUBLIC_MEETING_TEMPLATE_ID;
const serviceId = import.meta.env.VITE_PUBLIC_MEETING_SERVICE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_MEETING_PUBLIC_KEY;
interface MeetingEmailProps {
  meetingType: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  description: string;
}

export const sendMeetingEmail = async (values: MeetingEmailProps) => {
  try {
    const params = {
      ...values,
      company_name: "Muneeb Analytics",
    };
    const res = await emailjs.send(serviceId, meetingTemplateId, params, {
      publicKey,
    });
    return { success: true, status: res.status, text: res.text };
  } catch (error) {
    console.error("EmailJS error:", error);
    return { success: false, error };
  }
};

console.log(serviceId, meetingTemplateId, publicKey);