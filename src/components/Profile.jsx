import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="section">
      <h2>Profilo</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Salva</button>
        </form>
      ) : (
        <div>
          <p><b>Nome:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Telefono:</b> {phone}</p>
          <button onClick={() => setIsEditing(true)}>Modifica</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
