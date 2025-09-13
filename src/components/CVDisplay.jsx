export default function CVDisplay({ profile, education, experience }) {
  return (
    <div>
      <h2>Curriculum Vitae</h2>
      <h3>{profile.name}</h3>
      <p>{profile.email} | {profile.phone}</p>

      <h4>Educazione</h4>
      {education.map((e, i) => (
        <p key={i}><strong>{e.title}</strong> - {e.school} ({e.date})</p>
      ))}

      <h4>Esperienza Lavorativa</h4>
      {experience.map((e, i) => (
        <p key={i}><strong>{e.position}</strong> - {e.company} ({e.from} - {e.to})<br />{e.responsibilities}</p>
      ))}
    </div>
  );
}
