import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin } from "lucide-react";
import { FcNext } from "react-icons/fc";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Title from "../Title/Title";

const formSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo electrónico no válido"),
  message: z.string().min(3, "El mensaje debe tener al menos 3 caracteres"),
  honeypot: z.string().max(0, "Bot detectado"),
});

export default function Email() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState({});
  const [sendedEmail, setSendedEmail] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const navegatioEnd = window.performance.getEntriesByType("navigation");
    if (navegatioEnd.length > 0 && navegatioEnd[0].type === "reload") {
      setSendedEmail(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = formSchema.safeParse(form);

    if (!validation.success) {
      const formattedErrors = validation.error.format();
      setErrors({
        name: formattedErrors.name?._errors[0] || "",
        email: formattedErrors.email?._errors[0] || "",
        message: formattedErrors.message?._errors[0] || "",
        honeypot: formattedErrors.honeypot?._errors[0] || "",
      });
      return;
    }

    if (form.honeypot !== "") {
      console.warn("Bot detectado, no se envía el formulario.");
      return;
    }

    setIsSending(true);

    await emailjs.sendForm(
      "service_snfdx08",
      "template_wnkvwg2",
      e.target,
      "bb91HrG2Gq95n-5eO"
    );

    setErrors({});
    setForm({
      name: "",
      email: "",
      message: "",
      honeypot: "",
    });
    setTimeout(() => {
      setIsSending(false);
      setSendedEmail(true);
    }, 1025);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8  mb-8 relative z-0 flex flex-col justify-center items-center"
    >
      <Title> Contactanos! </Title>
      <div className=" p-4 bg-gradient-to-r from-indigo-400  to-purple-600 rounded-lg ">
        <div className="relative bg-white p-6 rounded-lg gap-2 flex rounded-tr-4xl clip-path-1 ">
          <div className="flex justify-between w-full md:flex-row gap-8 flex-col">
            <div className="flex flex-col">
              <h2 className="text-2xl font-black text-gray-800 relative inline-block mb-8">
                ¡Contáctanos y comienza
                <br />
                tu camino hoy! ✨
              </h2>

              {isSending ? (
                <div className="flex justify-center animate-fadeIn h-[200px]">
                  <DotLottieReact
                    className=" pl-16 pb-16"
                    src="https://lottie.host/ab016612-5de1-43b0-b8c9-1caad5ca798d/MxDjgoak0u.lottie"
                    loop
                    autoplay
                  />
                </div>
              ) : sendedEmail ? (
                <div className="flex flex-col items-center justify-center animate-fadeIn h-[200px]">
                  <DotLottieReact
                    src="https://lottie.host/7b3fa6c9-9457-4f6d-9623-1fea69ad0ac2/LOQd4PaLdS.lottie"
                    loop
                    autoplay
                  />
                  <p className="text-2xl font-bold text-center ">
                    ¡Consulta enviada! 📩
                  </p>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-6  h-[200px]"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    name="honeypot"
                    value={form.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    autoComplete="off"
                    tabIndex="-1"
                  />

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="flex flex-col">
                        <input
                          type="text"
                          value={form.name}
                          name="name"
                          onChange={handleChange}
                          className="peer border-b border-gray-400 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-400 focus:placeholder-indigo-500"
                          placeholder="Nombre"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>

                      <div className="flex flex-col">
                        <input
                          type="text"
                          value={form.email}
                          name="email"
                          onChange={handleChange}
                          placeholder="Correo Electrónico"
                          className="border-b border-gray-400 p-2 peer focus:outline-none focus:border-indigo-500 placeholder-gray-400 focus:placeholder-indigo-500"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          name="message"
                          className="peer border-b border-gray-400 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-400 focus:placeholder-indigo-500"
                          onChange={handleChange}
                          value={form.message}
                          placeholder="Asunto"
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-indigo-700 text-sm text-white w-44 flex items-center justify-center cursor-pointer py-2 rounded-4xl"
                  >
                    Enviar Consulta
                    <span className="bg-white w-6 h-6 flex items-center justify-center rounded-full ml-4">
                      <FcNext />
                    </span>
                  </button>
                </form>
              )}
            </div>

            <div className="w-72 p-6 bg-indigo-50 flex flex-col justify-center rounded-sm overflow-hidden clip-path-2">
              <h2 className="text-lg text-left font-black text-gray-800 relative inline-block border-b border-gray-400 pb-2 mb-2">
                ¡Aprende inglés de manera fácil y efectiva! ✨
              </h2>

              <div className="space-y-2 mt-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>contacto@empresa.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span>Calle Principal 123, Ciudad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
