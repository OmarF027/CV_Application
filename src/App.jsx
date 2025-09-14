import { useState } from "react";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import CVDisplay from "./components/CVDisplay";
import Buttons from "./components/Buttons";
import "./styles.css";

export default function App() {
  const defaultData = {
    profile: {
      firstName: "Omar",
      lastName: "Frosali",
      email: "omarfrosali@hotmail.com",
      phone: "3466715632",
      address: "Roma, Italia",
      website: "Portfolio: omarfrosalidev.com",
      summary:
        "Junior Developer con solide competenze in HTML, CSS, PHP, JavaScript, Node.js e MySQL con esperienza nella creazione di applicazioni web complete e responsive. Portfolio dimostrativo di progetti funzionali con integrazione database e API. Certificazioni in Responsive Web Design e Foundational C# (freeCodeCamp). Cerco un'opportunità Junior in un team dove poter apprendere, mettere in pratica le mie capacità e contribuire a progetti concreti. Disponibile a trasferirmi.",
      picture: "/1686118615378.jpg", // mettila nella cartella public
    },
    experience: [
      {
        position: "Junior Developer",
        company: "Esseti",
        from: "07/2025",
        to: "Presente",
        tasks:
          "Collaborazione nello sviluppo e manutenzione di un software gestionale per il settore catering, lavorando con C#, .NET, MudBlazor e SQL Server Management Studio per la gestione dei dati. Attività di analisi requisiti, interfacce utente e debug, in affiancamento al team di sviluppo.",
      },
      {
        position: "IFTS PRO-DEVELOPER",
        company: "Assoservizi",
        from: "01/2025",
        to: "06/2025",
        tasks:
          "Tecnico della progettazione, sviluppo, testing e manutenzione del software.",
      },
    ],
    education: [
      { school: "The Odin Project", degree: "Foundations Course", date: "07/2025" },
      { school: "freeCodeCamp", degree: "Foundational C# with Microsoft", date: "06/2025" },
      { school: "freeCodeCamp", degree: "Responsive Web Design", date: "02/2025" },
    ],
    skills: ["HTML5", "CSS3", "PHP", "JavaScript", "MySQL", "Node.js", "React"],
    languages: ["Italiano", "Inglese", "Arabo", "Spagnolo", "Russo"],
  };

  const [data, setData] = useState(defaultData);

  function resetData() {
    setData({
      profile: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        website: "",
        summary: "",
        picture: null,
      },
      education: [],
      experience: [],
      skills: [],
      languages: [],
    });
  }

  function loadDefault() {
    setData(defaultData);
  }

  return (
    <div className="container">
      <div className="left-panel">
        <Profile data={data} setData={setData} />
        <Experience data={data} setData={setData} />
        <Education data={data} setData={setData} />
        <Skills data={data} setData={setData} />
        <Buttons resetData={resetData} loadDefault={loadDefault} />
      </div>
      <div className="right-panel">
        <CVDisplay data={data} />
      </div>
    </div>
  );
}
