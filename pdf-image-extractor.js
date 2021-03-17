// Tesserect OCR(optical character recognition) to extract text from image
var inspect = require('eyes').inspector({maxLength:20000});
var pdf_extract = require('pdf-extract');

var absolute_path_to_pdf = 'Path/To/File.pdf'
var options = {
  type: 'ocr' // perform ocr to get the text within the scanned image
}
 
var processor = pdf_extract(absolute_path_to_pdf, options, function(err) {
  if (err) {
    // return callback(err);
    console.log(err)
  }
});
processor.on('complete', function(data) {
  inspect(data.text_pages, 'extracted text pages');
  console.log(data)
  // callback(null, text_pages);
});
processor.on('error', function(err) {
  inspect(err, 'error while extracting pages');
  // return callback(err);
  console.log(err)
});

// https://www.npmjs.com/package/pdf-extract (extract scanned images of text from PDF)

// https://www.npmjs.com/package/pdf-table-extractor (tabular data from parseble pdfs(non-image pdfs))

// https://www.npmjs.com/package/pdf-to-text (extract text from PDFS)