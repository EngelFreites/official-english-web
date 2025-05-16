import Title from "../Title/Title";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="  max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center"
    >
      <Title margin={758}>Cómo Te Acompañamos en Tu Aprendizaje</Title>
      <div className="relative flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-8 gap-6">
        <div className=" relative col-span-2 row-span-4 bg-gradient-to-b bg-purple-400 rounded-4xl  h-72 lg:h-98 shadow-lg  px-4 pt-4 lg:px-10 lg:pt-10">
          <h1 className="text-3xl font-bold text-[#FEF08A]">
            Educación Hecha a Tu Medida
          </h1>
          <p className="text-xl text-[#FEF08A] mt-10 font-semibold">
            Ofrecemos clases dinámicas y adaptadas a cada estudiante, ajustando
            los contenidos y ritmos según tus necesidades.
          </p>
          <img
            src="/englishLearn.png"
            className="absolute bottom-4 w-30 h-30 right-4"
            alt=""
          />
        </div>
        <div className="relative bg-[#ff7e7e] lg:bg-transparent rounded-4xl lg:rounded-none  col-span-3 row-span-4 z-2 flex flex-col gap-8 items-center">
          <img
            src="/comentR.png"
            className=" hidden lg:block lg:w-full lg:h-full absolute z-0"
            alt=""
          />
          <h1 className="text-3xl font-bold text-[#282828] px-12 pt-12 relative z-10">
            Aprende inglés de forma natural y a tu ritmo
          </h1>
          <p className="text-xl text-[#282828] px-12 pb-32 font-semibold relative z-10">
            Te ayudamos a integrar el idioma en tu vida de forma natural, ágil e
            intuitiva. Todo esto con entusiasmo y paciencia.
          </p>
          <img
            className="absolute bottom-2 right-12 z-10 w-40 h-30 xl:w-50 xl:h-40"
            src="/banderas.png"
            alt=""
          />

          <div className="absolute hidden  bg-indigo-400 h-12 w-[40%] bottom-2 left-2 rounded-4xl  lg:flex items-center justify-center">
            <p className="text-white text-sm">Aprende con naturalidad</p>
          </div>
        </div>
        <div className=" lg:hidden  bg-indigo-400 h-12 w-full  rounded-4xl  flex items-center justify-center">
          <p className="text-white text-sm">Aprende con naturalidad</p>
        </div>
        <div className="relative bg-[#7fe9fe] lg:bg-transparent rounded-4xl lg:rounded-none  col-span-3 row-span-4 z-2 flex flex-col gap-8 items-center">
          <img
            src="/comentL.png"
            className="hidden lg:block lg:w-full lg:h-full absolute z-0"
            alt=""
          />
          <h1 className=" relative text-3xl font-bold pt-12 px-12 text-gray-100 z-10">
            Aprende con Material Actualizado y Alcanzá tus Metas Más Rápido
          </h1>
          <p className=" relative text-xl  text-gray-100 px-12 pb-32 font-semibold z-10">
            Trabajamos con material actualizado y te guiamos para que puedas
            aprender dentro y fuera de la clase, logrando tus metas rápidamente.
          </p>
          <img
            className="absolute bottom-4 left-12 z-10 w-40 h-30 lg:w-50 lg:h-40"
            src="/libros.png"
            alt=""
          />

          <div className="absolute hidden  bg-indigo-400 h-12 w-[40%] bottom-1 right-0 rounded-4xl  lg:flex items-center justify-center">
            <p className="text-white text-sm">Domina el Inglés con Confianza</p>
          </div>
        </div>
        <div className="lg:hidden  bg-indigo-400 h-12 w-full  rounded-4xl  flex items-center justify-center">
          <p className="text-white text-sm">Domina el Inglés con Confianza</p>
        </div>

        <div className=" relative col-span-2 row-span-4  bg-pink-100 rounded-4xl  h-72 lg:h-98 shadow-lg  px-4 pt-4 lg:px-10 lg:pt-10">
          <h1 className="text-3xl font-bold text-[#C27AFF]">
            Educación Hecha a Tu Medida
          </h1>
          <p className="text-xl text-[#C27AFF] mt-10 font-semibold">
            Ofrecemos clases dinámicas y adaptadas a cada estudiante, ajustando
            los contenidos y ritmos según tus necesidades.
          </p>
          <img
            className="absolute bottom-4 w-40 h-30 right-4"
            src="/learnEnglish.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
