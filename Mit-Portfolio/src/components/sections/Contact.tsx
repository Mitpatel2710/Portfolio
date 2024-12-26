import React from 'react';
import { ContactForm } from '../contact/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mit.p@mytechjobemail.com',
    href: 'mailto:mit.p@mytechjobemail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (972) 638-7518',
    href: 'tel:+19726387518'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dallas, TX',
    href: null
  }
];

export function Contact() {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
        Get in Touch
      </h2>
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{item.label}</h4>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}