import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+5491158120567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-16 z-999"
    >
      <FaWhatsapp className="h-18 w-18 " color="green" />
    </a>
  );
}
