import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { emailConfig } from '../config/email';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData, resetForm: () => void) => {
    setIsLoading(true);

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      toast.error('Email service is not properly configured');
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        emailConfig.publicKey
      );

      toast.success('Message sent successfully!');
      resetForm(); // Clear the form after successful submission
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading };
}