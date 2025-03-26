import emailjs from "@emailjs/browser";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin } from "lucide-react";
import { FcNext } from "react-icons/fc";

const formSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo electrónico no válido"),
  message: z.string().min(3, "El mensaje debe tener al menos 3 caracteres"),
});

export default function Email() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleSumit = async (e) => {
    e.preventDefault();

    const validation = formSchema.safeParse(form);

    if (!validation.success) {
      const formattedErrors = validation.error.format();
      setErrors({
        name: formattedErrors.name?._errors[0] || "",
        email: formattedErrors.email?._errors[0] || "",
        message: formattedErrors.message?._errors[0] || "",
      });
      return;
    }

    emailjs.sendForm(
      "service_jm71qq8",
      "template_nswdgng",
      e.target,
      "RHl8UWYvr6R2mOdhc"
    );

    setErrors({});

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 mb-8 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-lg">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex">
          <div className="flex flex-col">
            <h2 className="text-2xl pl-12 font-black text-gray-800 relative inline-block mb-2 whitespace-pre-line">
              {`¡Contáctanos y comienza\ntu camino hoy! ✨`}
            </h2>
            <form
              action=""
              className="flex flex-col gap-4 pl-12  pr-8 "
              onSubmit={handleSumit}
            >
              <div className="flex  gap-6">
                <div className="flex flex-col">
                  <input
                    type="text"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    className="peer border-b border-black p-2 focus:outline-none focus:border-indigo-500  placeholder-gray-400 focus:placeholder-indigo-500  "
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
                    placeholder="Correo Electronico"
                    className="border-b border-black p-2peer border-b border-black p-2 focus:outline-none focus:border-indigo-500  placeholder-gray-400 focus:placeholder-indigo-500  "
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
                    className=" peer border-b border-black p-2 focus:outline-none focus:border-indigo-500  placeholder-gray-400 focus:placeholder-indigo-500"
                    onChange={handleChange}
                    value={form.message}
                    placeholder="Asuntos"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm  w-sm">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button className="px-8 py-4 bg-indigo-600 text-white rounded-4xl font-semibold hover:bg-blue-700 transition-colors flex justify-center gap-2 w-64">
                Enviar Consulta
                <span className="bg-white text-indigo-700  p-1  aling-center  rounded-full">
                  {" "}
                  <FcNext size={20} />
                </span>
              </button>
            </form>
          </div>

          <div className="pl-8  border-l-2 border-indigo-300 ">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Si tienes alguna duda, contáctanos. Estaremos encantados de
              atenderte.
            </p>

            <div className="space-y-4">
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
  );
}
