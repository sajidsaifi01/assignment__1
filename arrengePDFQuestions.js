/* Q4) Write the smallest possible python / Nodejs script, which parses this file and puts the
questions in correct order into another file. Your approach should be generic with minimal
assumptions.*/ 
const fs = require("fs");
const pdfParse = require("pdf-parse");
const PDFDocument = require('pdfkit');
const doc = new PDFDocument;

/* I am reading the pdf and getting the data and also genrating new PDF as well. To run this file 
please run the command => node arrengePDFQestions.js in terminal.*/


/*
from here can read any pdf file data we just need to pass the name of the file. where the "getPDFText" function is
calling */ 
const getPDFText = async (pdfFile) => {   
    let pdfBuffer = null;
    let parsePDF = ""
    try {
        if (fs.existsSync(pdfFile)) {
            pdfBuffer = fs.readFileSync(pdfFile)
            parsePDF = await pdfParse(pdfBuffer)     
            if (parsePDF) {
                return parsePDF.text  //in this veriable I am getting all the PDF data.
            }

            // Need to implement the code for arrenge the questions try hard but unable to do that :( 

            
            // from here we can create new file and give features accourding to requirement
            doc.pipe(fs.createWriteStream('Assignment2.pdf'));
            doc.fontSize(15).text(parsePDF.text, 100, 100);
            doc.end();
        }
    } catch (error) {
        return error.message
    }
}

getPDFText("Software-Engineer-Assignment.pdf").then(text => {
    console.log(text)
}).catch(err => {
    console.log(err)
});