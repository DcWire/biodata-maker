exports.template1 = (body) => {

    const styles = `
    <style>
    body {
      max-width: 700px;
      margin: 10 auto;
      padding: 0px;
      border: 6px groove black;
      border-radius: 5px;
      font-family: Arial, sans-serif;
    }
    h3 {
      text-align: center;
    }
    h4 {
      margin-top: 20px;
    }
    ul {
      list-style-type: none;
    }

    li {
      margin-bottom: 10px;
    }
    .aligned-container {
        display: flex;
        flex-direction: column;
      }
      
      .aligned-text {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        margin-left : 30px;
      }
      
      .aligned-text span:first-child {
        min-width: 200px;
        margin-right: 220px;
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
            <h3><b><u>Matrimonial Biodata</u></b></h3>
            <div class="aligned-container">
            <div class = "aligned-text">
            <h4><u>Personal Information</u></h4>
            </div>
            </div>

                ${
                    Object.keys(body.values)?.map((value) => {
                    return `<div class="aligned-container"><div class = "aligned-text">
                                <span>${getString(value)}</span> <span>: ${body.values[value]}</span>
                            </div>
                            </div>`
                            
                    }).join('')
                }

                ${
                    Object.keys(body.education)?.map((value) => {
                    return `<div class="aligned-container"><div class = "aligned-text">
                                <span>${getString(value)}</span> <span>: ${body.values[value]}</span>
                            </div>
                            </div>`
                    }).join('')
                }
            <div class="aligned-container">
            <div class = "aligned-text">
            <h4><u>Family Information</u></h4>
            </div>
            </div>
                ${
                    Object.keys(body.personal)?.map((value) => {
                    return `<div class="aligned-container"><div class = "aligned-text">
                                <span>${getString(value)}</span> <span>:   ${body.values[value]}</span>
                            </div>
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
