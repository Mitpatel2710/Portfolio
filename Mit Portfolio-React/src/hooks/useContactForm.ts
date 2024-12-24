import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
      );

      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading };
}