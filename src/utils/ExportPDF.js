import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ExportPDF = async (elementId) => {
  const input = document.getElementById(elementId);

  const canvas = await html2canvas(input, {
    scale: 2, // Adjusts the scale to improve quality
    useCORS: true, // Use this if your images are from a different origin
  });

  const imgData = canvas.toDataURL('image/png');

  // A4 size in pt (210mm x 297mm)
  const pdf = new jsPDF('p', 'pt', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  // Add the image to the PDF
  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  // Add additional pages if necessary
  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save('download.pdf');
};

export default ExportPDF;