import { useState } from "react";

export default function Education({ data, setData }) {
  const [editing, setEditing] = useState(true);
  const [edu, setEdu] = useState({ school: "", title: "", date: "" });

  const handleAdd = () => {
    setData([...data, edu]);
    setEdu({ school: "", title: "", date: "" });
  };

  return (
    <div>
      <h3>Formazione</h3>
      {editing ? (
        <>
          <input placeholder="Scuola" value={edu.school} onChange={(e) => setEdu({ ...edu, school: e.target.value })} />
          <input placeholder="Titolo di studio" value={edu.title} onChange={(e) => setEdu({ ...edu, title: e.target.value })} />
          <input placeholder="Data" value={edu.date} onChange={(e) => setEdu({ ...edu, date: e.target.value })} />
          <button onClick={handleAdd}>Aggiungi</button>
          <button onClick={() => setEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          {data.map((e, i) => (
            <p key={i}><strong>{e.title}</strong> - {e.school} ({e.date})</p>
          ))}
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
