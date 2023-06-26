exports.template1 = (body) => {

    const styles = `
        <style>
            body {
                background-color: red;
            }
            h2 {
                color: blue;
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
            <h2>Personal Details</h2>
                ${
                    Object.keys(body.values)?.map((value) => {
                    return `<div>
                                <p>${body.values[value]}</p>
                            </div>`
                    }).join('')
                }
            <h2>Education Details</h2>
                ${
                    Object.keys(body.education)?.map((value) => {
                    return `<div>
                                <p>${body.education[value]}</p>
                            </div>`
                    }).join('')
                }
            <h2>Family Background</h2>
                ${
                    Object.keys(body.personal)?.map((value) => {
                    return `<div>
                                <p>${body.personal[value]}</p>
                            </div>`
                    }).join('')
                }
        </body>
    </html>
`;
}

