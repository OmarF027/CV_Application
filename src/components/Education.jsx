import React from "react";

export default function Education({ data, setData }) {
  // Aggiunge una nuova voce di formazione
  function addEducation() {
    setData((prev) => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", date: "" }],
    }));
  }

  // Gestisce i cambiamenti dei campi input
  function handleChange(index, field, value) {
    const newEducation = [...data.education];
    newEducation[index][field] = value;
    setData((prev) => ({ ...prev, education: newEducation }));
  }

  return (
    <div className="education-section">
      <h2>Formazione</h2>
      {data.education.map((ed, i) => (
        <div key={i} className="education-item">
          <input
            type="text"
            placeholder="School"
            value={ed.school || ""}
            onChange={(e) => handleChange(i, "school", e.target.value)}
          />
          <input
            type="text"
            placeholder="Degree"
            value={ed.degree || ""}
            onChange={(e) => handleChange(i, "degree", e.target.value)}
          />
          <input
            type="text"
            placeholder="Date"
            value={ed.date || ""}
            onChange={(e) => handleChange(i, "date", e.target.value)}
          />
        </div>
      ))}
      <button type="button" className="btn add" onClick={addEducation}>
        + Aggiungi
      </button>
    </div>
  );
}
