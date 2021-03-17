const { DownloaderHelper } = require('node-downloader-helper');

options =
{
    fileName: 'pdf-downloader2.pdf'
}

const download = new DownloaderHelper('https://investors.tatamotors.com/financials/72-ar-html/pdf/Introducing-Tata-Motors.pdf', './PDFs', options);
download.on('end', () => console.log('Download Completed'))
download.start();