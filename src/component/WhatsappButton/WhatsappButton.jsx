import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+5491158120567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-4 z-999"
    >
      <FaWhatsapp className="h-14 w-14 " color="green" />
    </a>
  );
}
