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
    <div className="max-w-4xl mx-auto p-4 mb-8 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-lg">
      <div className="relative bg-white p-6 rounded-lg gap-2 flex  rounded-tr-4xl clip-path-1">

        <div className="flex justify-between w-full lg:flex-row gap-8 flex-col">
          <div className="flex flex-col">
            <h2 className="text-2xl  font-black text-gray-800 relative inline-block">
              ¡Contáctanos y comienza<br />tu camino hoy! ✨
            </h2>
            <form
              action=""
              className="flex flex-col  gap-12 mt-8 h-full "
              onSubmit={handleSumit}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-4 ">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      value={form.name}
                      name="name"
                      onChange={handleChange}
                      className="peer border-b border-gray-400 p-2 focus:outline-none focus:border-indigo-500  placeholder-gray-400 focus:placeholder-indigo-500  "
                      placeholder="Nombre"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div className="flex flex-col ">
                    <input
                      type="text"
                      value={form.email}
                      name="email"
                      onChange={handleChange}
                      placeholder="Correo Electronico"
                      className="border-b border-gray-400 p-2peer  p-2 focus:outline-none focus:border-indigo-500  placeholder-gray-400 focus:placeholder-indigo-500  "
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
                    className=" peer border-b border-gray-400 p-2 focus:outline-none focus:border-indigo-500  placeholder-gray-400 focus:placeholder-indigo-500"
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
          
              </div>
        
              <button type="submit" className="bg-indigo-700 text-sm text-white w-44 flex items-center justify-center py-2 rounded-4xl">
                Enviar Consulta
                <span className="bg-white w-6 h-6 flex items-center justify-center rounded-full ml-4"> <FcNext/> </span>
              </button>
              

        
     
            </form>
          </div>

            <div className=" w-72 p-6 bg-indigo-50 flex flex-col justify-center rounded-sm overflow-hidden clip-path-2">
  
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
  );
}
