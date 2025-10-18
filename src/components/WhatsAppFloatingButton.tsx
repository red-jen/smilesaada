"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

type WhatsAppFloatingButtonProps = {
  phoneNumber: string;
};

export default function WhatsAppFloatingButton({ phoneNumber }: WhatsAppFloatingButtonProps) {
  return (
    <div className="whatsapp-widget-container">
      <FloatingWhatsApp
        phoneNumber={phoneNumber.replace(/[^\d]/g, "")}
        accountName="Chat with us"
        statusMessage="Typically replies in minutes"
        chatMessage="Hi! How can we help you today?"
        zIndex={2147483647}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}


