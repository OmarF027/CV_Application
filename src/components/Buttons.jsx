import html2pdf from "html2pdf.js";

export default function Buttons({ resetData }) {

  function savePDF() {
    const element = document.querySelector(".cv-container"); // seleziona il CV
    const options = {
      margin: 0.5,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  }

  function printCV() {
    window.print();
  }

  return (
    <div className="buttons">
      <button onClick={resetData} className="btn clear">
        Clear
      </button>
      <button onClick={savePDF} className="btn save">
        Salva PDF
      </button>
      <button onClick={printCV} className="btn print">
        Stampa
      </button>
    </div>
  );
}
