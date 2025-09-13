import { useState } from "react";

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateUntil, setDateUntil] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="section">
      <h2>Esperienza Lavorativa</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Azienda"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Posizione"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <textarea
            placeholder="Responsabilità"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
          />
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
          <input
            type="date"
            value={dateUntil}
            onChange={(e) => setDateUntil(e.target.value)}
          />
          <button type="submit">Salva</button>
        </form>
      ) : (
        <div>
          <p><b>Azienda:</b> {company}</p>
          <p><b>Posizione:</b> {position}</p>
          <p><b>Responsabilità:</b> {responsibilities}</p>
          <p><b>Periodo:</b> {dateFrom} - {dateUntil}</p>
          <button onClick={() => setIsEditing(true)}>Modifica</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
