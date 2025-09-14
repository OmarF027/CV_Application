export default function Education({ data, setData }) {
  function addEducation() {
    setData((prev) => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", date: "" }],
    }));
  }

  function handleChange(i, field, value) {
    const newEd = [...data.education];
    newEd[i][field] = value;
    setData((prev) => ({ ...prev, education: newEd }));
  }

  return (
    <div>
      <h2>Formazione</h2>
      {data.education.map((ed, i) => (
        <div key={i}>
          <input
            placeholder="School"
            value={ed.school}
            onChange={(e) => handleChange(i, "school", e.target.value)}
          />
          <input
            placeholder="Degree"
            value={ed.degree}
            onChange={(e) => handleChange(i, "degree", e.target.value)}
          />
          <input
            placeholder="Date"
            value={ed.date}
            onChange={(e) => handleChange(i, "date", e.target.value)}
          />
        </div>
      ))}
      <button onClick={addEducation}>+ Aggiungi</button>
    </div>
  );
}
