import Button from "../../component/Button/Button";
import "./home.css";
export default function Home() {
  return (
    <div className="layout">
      <main className="home">
        <h1>
          <span className="highlight">🚀 Domina el inglés</span>y abre un mundo
          de oportunidades 🌍
        </h1>
        <h2>
          Aprende de manera rápida, divertida y efectiva. ¡Comienza hoy y
          transforma tu futuro!
        </h2>
        <Button>Start Now</Button>
      </main>
      <secction className="content-img">
        <div className="img"></div>
      </secction>
    </div>
  );
}
