exports.template1 = (body) => {

    const styles = `
        <style>
            body {
                background-color: #FFD786;
            }
            h2 {
                color: blue;
            }
            h1 {
                text-align: center;
            }
        </style>
    `
    return  `
    <html>
        <head>
            <title>PDF Test</title>
            ${styles}
        </head>
        <body>
            <h1>Biodata</h1>
            <h2>Personal Details</h2>
                ${
                    Object.keys(body.values)?.map((value) => {
                    return `<div>
                                <p>${getString(value)} : ${body.values[value]}</p>
                            </div>`
                    }).join('')
                }
            <h2>Education Details</h2>
                ${
                    Object.keys(body.education)?.map((value) => {
                    return `<div>
                                <p>${getString(value)} : ${body.education[value]}</p>
                            </div>`
                    }).join('')
                }
            <h2>Family Background</h2>
                ${
                    Object.keys(body.personal)?.map((value) => {
                    return `<div>
                                <p>${getString(value)} : ${body.personal[value]}</p>
                            </div>`
                    }).join('')
                }
        </body>
    </html>
`;
}


const getString = (value) => {
    const str = value.charAt(0).toUpperCase()+value.slice(1);
    return str.split(/(?=[A-Z])/).join(' ');

}
