import { useState } from "react";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVDisplay from "./components/CVDisplay";
import Buttons from "./components/Buttons";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({
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

  return (
    <div className="container">
      <div className="left-panel">
        <Profile data={data} setData={setData} />
        <Experience data={data} setData={setData} />
        <Education data={data} setData={setData} />
        <Buttons resetData={resetData} />
      </div>
      <div className="right-panel">
        <CVDisplay data={data} />
      </div>
    </div>
  );
}
