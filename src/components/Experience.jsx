import { useState } from "react";

export default function Experience({ data, setData }) {
  const [editing, setEditing] = useState(true);
  const [exp, setExp] = useState({ company: "", position: "", responsibilities: "", from: "", to: "" });

  const handleAdd = () => {
    setData([...data, exp]);
    setExp({ company: "", position: "", responsibilities: "", from: "", to: "" });
  };

  return (
    <div>
      <h3>Esperienza Lavorativa</h3>
      {editing ? (
        <>
          <input placeholder="Azienda" value={exp.company} onChange={(e) => setExp({ ...exp, company: e.target.value })} />
          <input placeholder="Posizione" value={exp.position} onChange={(e) => setExp({ ...exp, position: e.target.value })} />
          <input placeholder="Responsabilità" value={exp.responsibilities} onChange={(e) => setExp({ ...exp, responsibilities: e.target.value })} />
          <input placeholder="Da" value={exp.from} onChange={(e) => setExp({ ...exp, from: e.target.value })} />
          <input placeholder="A" value={exp.to} onChange={(e) => setExp({ ...exp, to: e.target.value })} />
          <button onClick={handleAdd}>Aggiungi</button>
          <button onClick={() => setEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          {data.map((e, i) => (
            <p key={i}><strong>{e.position}</strong> - {e.company} ({e.from} - {e.to})<br />{e.responsibilities}</p>
          ))}
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
