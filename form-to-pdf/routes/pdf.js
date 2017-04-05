var express = require('express');
var router = express.Router();
var PDFDocument = require('pdfkit');

router.post('/', function(req,res){
  var document = new PDFDocument();
  var filename = req.body.filename;
  filename = encodeURIComponent(filename) + '.pdf';
  res.setHeader('Content-disposition', 'attachment; filename="' +filename+'"');
  res.setHeader('Content-type', 'application/pdf');
  var content = req.body.content;
  document.y = 300;
  document.text(content, 100, 100);
  document.pipe(res);
  document.end();
});

module.exports = router;
