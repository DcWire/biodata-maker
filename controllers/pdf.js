const puppeteer = require('puppeteer');
const fs = require('fs');
const {template1} = require('../templates/temp1');
exports.generatePDF = async (body) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const html = template1(body);
    await page.setContent(html);
    await page.pdf({
        path: 'biodata.pdf',
        format: 'A4',
        margin: {
        top: '10mm',
        bottom: '10mm',
        left: '10mm',
        right: '10mm',
        },
        printBackground: true
    });


    await browser.close();
}