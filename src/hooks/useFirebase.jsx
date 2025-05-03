import { useState, useEffect } from "react";
import { db } from "../lib/configFirebase";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function useFirebase() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const autoLogin = async () => {
      try {
        await signInWithEmailAndPassword(
          auth,
          import.meta.env.VITE_FIREBASE_EMAIL,
          import.meta.env.VITE_FIREBASE_PASSWORD
        );

        const obtenerDatos = async () => {
          const querySnapshot = await getDocs(collection(db, "plans"));
          const listaDeDocumentos = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Documentos obtenidos:", listaDeDocumentos);
          setDocuments(listaDeDocumentos);
          setLoading(false);

          await signOut(auth);
          console.log("Sesión cerrada");
        };

        obtenerDatos();
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        setLoading(false);
      }
    };

    autoLogin();
  }, [db]);

  return { documents, loading };
}
