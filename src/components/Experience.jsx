export default function Experience({ data, setData }) {
  function addExperience() {
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { company: "", position: "", tasks: "", from: "", to: "" },
      ],
    }));
  }

  function handleChange(i, field, value) {
    const newExp = [...data.experience];
    newExp[i][field] = value;
    setData((prev) => ({ ...prev, experience: newExp }));
  }

  return (
    <div>
      <h2>Esperienza</h2>
      {data.experience.map((ex, i) => (
        <div key={i}>
          <input
            placeholder="Company"
            value={ex.company}
            onChange={(e) => handleChange(i, "company", e.target.value)}
          />
          <input
            placeholder="Position"
            value={ex.position}
            onChange={(e) => handleChange(i, "position", e.target.value)}
          />
          <textarea
            placeholder="Tasks"
            value={ex.tasks}
            onChange={(e) => handleChange(i, "tasks", e.target.value)}
          />
          <input
            placeholder="From"
            value={ex.from}
            onChange={(e) => handleChange(i, "from", e.target.value)}
          />
          <input
            placeholder="To"
            value={ex.to}
            onChange={(e) => handleChange(i, "to", e.target.value)}
          />
        </div>
      ))}
      <button onClick={addExperience}>+ Aggiungi</button>
    </div>
  );
}
