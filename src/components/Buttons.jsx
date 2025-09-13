export default function Buttons({ clearAll }) {
  const savePDF = () => {
    window.print();
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={clearAll}>CLEAR</button>
      <button onClick={savePDF} style={{ marginLeft: "1rem" }}>STAMPA PDF</button>
    </div>
  );
}
