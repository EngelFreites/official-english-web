import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="relative bg-[#6366F1] text-white flex flex-col  gap-4 mt-28 items-center justify-center">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            fill="#6366F1"
          ></path>
        </svg>
      </div>
      <div className="flex gap-2 justify-center">
        <AiFillFacebook className="text-3xl" />
        <AiFillLinkedin className="text-3xl" />
        <AiFillInstagram className="text-3xl" />
      </div>

      <p className="text-center text-xs text-gray-200 pb-8">
        &copy; Engelbert 2025. Todos los derechos reservados.
      </p>
    </footer>
  );
}
