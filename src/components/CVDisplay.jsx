import React from "react";

export default function CVDisplay({ data }) {
  const p = data.profile || {};

  return (
    <div className="cv-container">
      {/* Colonna sinistra */}
      <div className="cv-left">
        {p.picture && <img src={p.picture} alt="Profile" className="cv-photo" />}

        <h3>Contatti</h3>
        {p.email && <p>{p.email}</p>}
        {p.phone && <p>{p.phone}</p>}
        {p.address && <p>{p.address}</p>}
        {p.website && <p>{p.website}</p>}

        <h3>Skills</h3>
        <ul>
          {(data.skills || []).map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <h3>Lingue</h3>
        <ul>
          {(data.languages || []).map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>

      {/* Colonna destra */}
      <div className="cv-right">
        <h1>
          {p.firstName || ""} {p.lastName || ""}
        </h1>
        {p.summary && <p className="summary">{p.summary}</p>}

        <h2>Esperienza</h2>
        {(data.experience || []).map((ex, i) => (
          <div key={i}>
            <h3>
              {ex.position && <span>{ex.position}</span>}
              {ex.position && ex.company && <span> - </span>}
              {ex.company && <span>{ex.company}</span>}
            </h3>
            <p>
              {ex.from && <span>{ex.from}</span>}
              {ex.from && ex.to && <span> – </span>}
              {ex.to && <span>{ex.to}</span>}
            </p>
            {ex.tasks && <p>{ex.tasks}</p>}
          </div>
        ))}

        <h2>Formazione</h2>
        {(data.education || []).map((ed, i) => (
          <div key={i}>
            <h3>
              {ed.degree && <span>{ed.degree}</span>}
              {ed.degree && ed.school && <span>, </span>}
              {ed.school && <span>{ed.school}</span>}
            </h3>
            {ed.date && <p>{ed.date}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
