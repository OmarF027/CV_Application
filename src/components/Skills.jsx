import React, { useState } from "react";

export default function Skills({ data, setData }) {
  const [skillInput, setSkillInput] = useState("");
  const [langInput, setLangInput] = useState("");

  // Aggiunge una nuova skill
  function addSkill() {
    if (skillInput.trim() === "") return;
    setData(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
    setSkillInput("");
  }

  // Aggiunge una nuova lingua
  function addLanguage() {
    if (langInput.trim() === "") return;
    setData(prev => ({ ...prev, languages: [...prev.languages, langInput.trim()] }));
    setLangInput("");
  }

  // Modifica skill
  function editSkill(index, value) {
    const newSkills = [...data.skills];
    newSkills[index] = value;
    setData(prev => ({ ...prev, skills: newSkills }));
  }

  // Modifica lingua
  function editLanguage(index, value) {
    const newLanguages = [...data.languages];
    newLanguages[index] = value;
    setData(prev => ({ ...prev, languages: newLanguages }));
  }

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Aggiungi skill"
          value={skillInput}
          onChange={e => setSkillInput(e.target.value)}
        />
        <button type="button" onClick={addSkill}>+ Aggiungi</button>
      </div>
      <ul>
        {data.skills.map((s, i) => (
          <li key={i}>
            <input
              type="text"
              value={s}
              onChange={e => editSkill(i, e.target.value)}
            />
          </li>
        ))}
      </ul>

      <h2>Lingue</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Aggiungi lingua"
          value={langInput}
          onChange={e => setLangInput(e.target.value)}
        />
        <button type="button" onClick={addLanguage}>+ Aggiungi</button>
      </div>
      <ul>
        {data.languages.map((l, i) => (
          <li key={i}>
            <input
              type="text"
              value={l}
              onChange={e => editLanguage(i, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
