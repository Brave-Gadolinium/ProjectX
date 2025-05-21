import jsPDF from "jspdf";

export const exportToPDF = (data: any[], filename: string) => {
  const doc = new jsPDF();
  doc.text(JSON.stringify(data), 10, 10);
  doc.save(`${filename}.pdf`);
};
