import Title from "../Title/Title";

export default function WeAre() {
  return (
    <section
      id="aboutUs"
      className="flex flex-col p-20 sm:px-6 lg:px-8  max-w-7xl mx-auto "
    >
      <Title>¿Quiénes somos?</Title>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 relative">
        <div class="absolute top-0 left-0  w-[70vw] h-[100vh]  bg-indigo-500 opacity-10 blur-3xl "></div>
        <p className="text-lg text-gray-800 whitespace-pre-line z-2">
          Somos un equipo de <strong>múltiples nacionalidades</strong> y edades
          que comparten el <strong>compromiso</strong> y entusiasmo por ayudar a
          nuestros clientes a <strong>cumplir sus objetivos</strong>. Trabajar
          con un idioma significa trabajar con{" "}
          <span className="highlight">cambios permanentes</span>. Los idiomas
          están vivos y se modifican, crecen y vibran con tal velocidad que se
          vuelve imposible ajustarlos a un <strong>programa único</strong>.
          Queremos que nuestros participantes experimenten y vivan el idioma en
          su <span className="highlight">realidad actual</span>. Creemos en la
          escucha activa de las necesidades de nuestros participantes y
          ofrecemos <strong>soluciones reales</strong> al ritmo y las
          posibilidades de cada uno. <br /> <br /> Nos adaptamos a la realidad.
          No creemos en <span className="highlight">fórmulas mágicas</span> ni
          atajos: <strong>aprender inglés</strong> es un compromiso que
          involucra a nuestra consultora, nuestros coaches y nuestros
          participantes. Y conscientes de esto, diseñamos{" "}
          <strong>planes efectivos</strong> que se adaptan a cada candidato y
          que simplifican la curva de aprendizaje para que la{" "}
          <strong>motivación</strong> se mantenga intacta.
        </p>

        <img
          src="weare.png"
          alt="quines somos"
          className=" w-[600px] lg:w-full bg-cover bg-no-repeat h-full rounded-2xl z-2"
        />
      </div>
    </section>
  );
}
