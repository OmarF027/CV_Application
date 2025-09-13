import { useState } from "react";

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="section">
      <h2>Istruzione</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome scuola"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <input
            type="text"
            placeholder="Titolo di studio"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit">Salva</button>
        </form>
      ) : (
        <div>
          <p><b>Scuola:</b> {school}</p>
          <p><b>Titolo:</b> {title}</p>
          <p><b>Data:</b> {date}</p>
          <button onClick={() => setIsEditing(true)}>Modifica</button>
        </div>
      )}
    </div>
  );
}

export default Education;
