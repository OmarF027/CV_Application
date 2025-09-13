import { useState } from "react";

export default function Profile({ data, setData }) {
  const [editing, setEditing] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Informazioni Generali</h3>
      {editing ? (
        <>
          <input name="name" placeholder="Nome" value={data.name} onChange={handleChange} />
          <input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
          <input name="phone" placeholder="Telefono" value={data.phone} onChange={handleChange} />
          <button onClick={() => setEditing(false)}>Submit</button>
        </>
      ) : (
        <>
          <p><strong>Nome:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Telefono:</strong> {data.phone}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
