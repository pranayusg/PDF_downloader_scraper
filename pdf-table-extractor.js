var fs = require('fs');
var pdf_table_extractor = require("pdf-table-extractor");

//PDF parsed
function success(result)
{
   console.log(JSON.stringify(result));
   fs.writeFileSync('./PDFjson/tabular-data.json',JSON.stringify(result) );
}

//Error
function error(err)
{
   console.error('Error: ' + err);
}

pdf_table_extractor("./PDFs/tabular-data.pdf",success,error);

