export default function Profile({ data, setData }) {
  const p = data.profile;

  function handleChange(field, value) {
    setData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => handleChange("picture", reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <h2>Informazioni</h2>
      <input
        type="text"
        placeholder="First Name"
        value={p.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={p.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={p.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={p.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={p.address}
        onChange={(e) => handleChange("address", e.target.value)}
      />
      <input
        type="text"
        placeholder="Website"
        value={p.website}
        onChange={(e) => handleChange("website", e.target.value)}
      />
      <textarea
        placeholder="Summary"
        value={p.summary}
        onChange={(e) => handleChange("summary", e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
}
