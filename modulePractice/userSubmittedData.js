const querystring = require('querystring');
function userSubmittedData(req, res) {
    let body = [];
        req.on('data', chunk => {
          body.push(chunk);
        });
        req.on('end', () => {
            let rawData = Buffer.concat(body).toString();
            console.log('Raw Data:', rawData);
            const formData = querystring.parse(rawData);
            console.log('Parsed Form Data:', formData);
          res.write(`<h2>Form Submitted</h2><p>Name: ${formData.name}</p><p>Email: ${formData.email}</p>`);
          res.end();
        });
}

module.exports = userSubmittedData;