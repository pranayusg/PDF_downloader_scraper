
var request = require('request-promise');
var fs = require('fs');

const pdfURL = 'https://investors.tatamotors.com/financials/72-ar-html/pdf/Introducing-Tata-Motors.pdf';

async function downloadPDF(pdfURL, outputFilename) {
    let pdfBuffer = await request.get({ uri: pdfURL, encoding: null });
    console.log("Writing downloaded PDF file to " + outputFilename + "...");
    console.log(pdfBuffer);
    fs.writeFileSync(outputFilename, pdfBuffer);
}

downloadPDF(pdfURL, "./PDFs/pdf-downloaded1.pdf");     





