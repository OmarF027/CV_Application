import { useState } from "react";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVDisplay from "./components/CVDisplay";
import Buttons from "./components/Buttons";
import "./styles.css";

function App() {
  const [profile, setProfile] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const clearAll = () => {
    setProfile({ name: "", email: "", phone: "" });
    setEducation([]);
    setExperience([]);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <Profile data={profile} setData={setProfile} />
        <Education data={education} setData={setEducation} />
        <Experience data={experience} setData={setExperience} />
      </div>
      <div className="right-panel">
        <CVDisplay profile={profile} education={education} experience={experience} />
        <Buttons clearAll={clearAll} />
      </div>
    </div>
  );
}

export default App;
