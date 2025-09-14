export default function Buttons({ resetData }) {
  function savePDF() {
    window.print();
  }

  return (
    <div className="buttons">
      <button onClick={resetData} className="btn clear">
        Clear
      </button>
      <button onClick={savePDF} className="btn save">
        Save PDF
      </button>
    </div>
  );
}
