const puppeteer = require('puppeteer');
const fs = require('fs');

exports.generatePDF = async (body) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const html = `
        <html>
            <head>
                <title>PDF Test</title>
            </head>
            <body>
                <h1>${JSON.stringify(body)}</h1>
            </body>
        </html>
    `;

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
    });


    await browser.close();
}