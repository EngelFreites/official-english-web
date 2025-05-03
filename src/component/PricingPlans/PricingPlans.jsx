import { useState, useEffect } from "react";
import { FourSquare } from "react-loading-indicators";
import { db } from "../../lib/configFirebase";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function PricingPlans() {
  const [documentos, setDocumentos] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [user, setUser] = useState(null); // Estado para manejar la sesión del usuario

  useEffect(() => {
    const auth = getAuth();

    // Iniciar sesión automáticamente con las credenciales predefinidas
    const autoLogin = async () => {
      try {
        // Inicia sesión con las credenciales predefinidas
        const userCredential = await signInWithEmailAndPassword(
          auth,
          import.meta.env.VITE_FIREBASE_EMAIL,
          import.meta.env.VITE_FIREBASE_PASSWORD
        );
        setUser(userCredential.user);

        // Obtener los documentos de Firestore
        const obtenerDatos = async () => {
          const querySnapshot = await getDocs(collection(db, "plans"));
          const listaDeDocumentos = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Documentos obtenidos:", listaDeDocumentos);
          setDocumentos(listaDeDocumentos);
          setLoading(false); // Cambiar el estado de carga una vez que los datos estén disponibles

          // Cerrar sesión después de obtener los datos
          await signOut(auth);
          console.log("Sesión cerrada");
          setUser(null); // Actualizar el estado para reflejar que el usuario ya no está autenticado
        };

        obtenerDatos();
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        setLoading(false); // Si hay un error, terminamos el loading
      }
    };

    autoLogin(); // Llamar a la función para hacer el login automáticamente
  }, [db]);

  // Mostrar el indicador de carga si los documentos aún no están cargados
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FourSquare color="#818cf8" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <div className="flex relative flex-col items-center pb-32 px-6 max-w-7xl mx-auto">
      <div className="w-96 h-96 absolute blur-[120px] left-10 top-24 rounded-full bg-violet-200 opacity-80"></div>
      <div className="w-72 h-72 absolute blur-[100px] right-10 top-56 rounded-full bg-blue-200 opacity-80"></div>
      <div className="w-64 h-64 absolute blur-[100px] left-1/3 bottom-20 rounded-full bg-indigo-100 opacity-80"></div>
      <div className="w-48 h-48 absolute blur-[80px] right-1/4 top-10 rounded-full bg-cyan-200 opacity-80"></div>

      <h1 className="text-4xl font-black text-gray-800 mb-2 z-10">
        Simple, affordable plans
      </h1>
      <p className="text-lg text-gray-500 mb-16 z-10">
        Choose the plan that fits your needs
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 z-10">
        {documentos.map((item, index) => {
          const isPremium = item.title.toLowerCase() === "premium";

          if (isPremium) {
            return (
              <div
                key={index}
                className="relative flex flex-col w-68 bg-indigo-50 border-2 border-indigo-500 rounded-3xl shadow-xl p-8 scale-105 transition-all hover:shadow-2xl hover:-translate-y-2"
              >
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
                <p className="text-indigo-700 font-semibold mb-2">
                  {item.title}
                </p>
                <h2 className="text-3xl font-extrabold text-indigo-900 mb-1">
                  {item.price}
                </h2>
                <p className="text-gray-600 mb-4">{item.billing_period}</p>
                <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors mb-6 shadow-lg">
                  Start free trial
                </button>
                <p className="whitespace-pre-line leading-relaxed">
                  {item.include}
                </p>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="flex flex-col w-68 bg-white border border-indigo-200 rounded-3xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <p className="text-indigo-600 font-semibold mb-2">{item.title}</p>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-1">
                {item.price}
              </h2>
              <p className="text-gray-400 mb-4">{item.billing_period}</p>
              <button className="px-6 py-2 bg-indigo-50 text-indigo-700 font-semibold rounded-lg border border-indigo-500 hover:bg-indigo-100 transition-colors mb-6">
                Start free trial
              </button>
              <p className="whitespace-pre-line leading-relaxed ">
                {item.include}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
