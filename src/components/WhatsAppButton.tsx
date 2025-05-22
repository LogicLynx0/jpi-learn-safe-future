
import React from 'react';
import { Whatsapp } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+923001234567'; // Replace with actual phone number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <Whatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
