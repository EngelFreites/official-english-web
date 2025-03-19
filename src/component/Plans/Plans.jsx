import { FaHandshake } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

export default function Plans() {
  return (
    <div className="container-plans">
      <h1 className="title-plans">Nuestros Planes</h1>
      <section className="container-card">
        <div className="card-plan">
          <div className="content-icon-plan-corporate">
            <FaHandshake className="icon-plan" />
          </div>
          <h2>Plan Corporativo</h2>
          <p className="text-plan">
            Ofrecemos sesiones de inglés flexibles para potenciar las
            habilidades comunicativas de los equipos, combinando inglés general
            y de negocios.
          </p>
        </div>

        <div className="card-plan">
          <div className="content-icon-plan-intensive">
            <IoMdSpeedometer className="icon-plan" />
          </div>
          <h2>Intensivo</h2>
          <p className="text-plan">
            El plan intensivo fortalece gramática, listening, speaking y
            vocabulario con evaluaciones frecuentes, ideal para lograr objetivos
            rápidos con dos horas semanales.
          </p>
        </div>

        <div className="card-plan">
          <div className="content-icon-plan-certificate">
            <FaAward className="icon-plan" />
          </div>

          <h2>Cert. Internacionales</h2>
          <p className="text-plan">
            La empresa decidirá si los participantes rinden exámenes
            internacionales, gestionados por la coordinación. El programa puede
            ejecutarse sin rendir, manteniendo el mismo nivel de evaluación.
          </p>
        </div>

        <div className="card-plan">
          <div className="content-icon-plan-conversation">
            <FaComments className="icon-plan" />
          </div>
          <h2>Conversación</h2>
          <p className="text-plan">
            El plan de conversación practica el habla en un ambiente relajado,
            ideal para mantener la fluidez con debates y dramatizaciones, a
            veces con coaches nativos.
          </p>
        </div>
      </section>
    </div>
  );
}
