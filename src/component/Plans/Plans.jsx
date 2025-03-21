import "./plans.css";
import plans from "../../data/plans.js";
import { useState } from "react";
import { FcNext } from "react-icons/fc";
import { FcFactory } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";

export default function Plans() {
  const [plan, setPlan] = useState("corporate");
  return (
    <div className="container-plans">
      <h1 className="title-plans">Nuestros Planes</h1>
      <p className="subtitle-plans underline-zigzag ">
        Te ofrecemos opciones diseñadas para cada necesidad y objetivo:
      </p>
      <div className="underline">
        <img src="/subrayado.png" alt="subrayado" />
      </div>
      <section className="container-card-and-plans">
        <div className="container-card">
          <a
            className={plan === "corporate" ? "card-plan-active" : "card-plan"}
            onClick={() => setPlan("corporate")}
          >
            <div className="content-icon-plan-corporate">
              <FcFactory size={40} />
            </div>
            <div>
              <h2 className="title-plan">Plan Corporativo</h2>
              <p className="text-plan">
                Inglés flexible para potenciar equipos en el ámbito laboral y
                social.
              </p>
            </div>
            <FcNext size={40} />
          </a>

          <a
            className={plan === "intensive" ? "card-plan-active" : "card-plan"}
            onClick={() => setPlan("intensive")}
          >
            <div className="content-icon-plan-calendar">
              <FcCalendar size={40} />
            </div>
            <div>
              <h2 className="title-plan">Plan Intensivo</h2>
              <p className="text-plan">
                Entrenamiento intensivo de inglés para objetivos puntuales y
                consolidación rápida.
              </p>
            </div>
            <FcNext size={48} />
          </a>

          <a
            className={
              plan === "certifications" ? "card-plan-active" : "card-plan"
            }
            onClick={() => setPlan("certifications")}
          >
            <div className="content-icon-plan-globe">
              <FcGlobe size={40} />
            </div>
            <div>
              <h2 className="title-plan">Certificaciones Internacionales</h2>
              <p className="text-plan">
                Opcionalidad de exámenes internacionales con gestión completa de
                inscripciones.
              </p>
            </div>
            <FcNext size={48} />
          </a>
          <a
            className={
              plan === "conversation" ? "card-plan-active" : "card-plan"
            }
            onClick={() => setPlan("conversation")}
          >
            <div className="content-icon-plan-collaboration">
              <FcCollaboration size={40} />
            </div>
            <div>
              <h2 className="title-plan">Conversacion</h2>
              <p className="text-plan">
                Práctica oral activa en un ambiente relajado, ideal para
                mantener la fluidez en inglés.
              </p>
            </div>
            <FcNext size={48} />
          </a>
        </div>
        <section className="section-plans">
          {plan !== "" && (
            <div className="content-plan">
              <h2 className="title-plan-section">{plans[plan].title}</h2>
              <p className="text-plan-section">{plans[plan].text}</p>
            </div>
          )}

          <img
            src="/cuadrado.png"
            className="cuadrado figure"
            width={40}
            alt=""
          />
          <img src="/puntos.png" className="point figure" alt="" />
          <img src="/estrella.png" className="start figure" alt="" />
          <img src="/triangulo.png" className="triangule figure" alt="" />
          <img
            src="/circulo.png"
            className="circule figure"
            width={40}
            alt=""
          />
        </section>
      </section>
    </div>
  );
}
