const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');
const GoogleSpreadsheet = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1DEFkYE5vDo-NrHLMnt1a9A9fGV1MkGFy86humWb0gAc');
let sheet;
// const creds = require('./client_secret.json')

app.use(bodyParser.urlencoded({ extended: false }))
let creds_json = {
  client_email: process.env.client_email,
  private_key: process.env.private_key
}

doc.useServiceAccountAuth(creds_json, function() {
  doc.getInfo(function(err, info) {
    sheet = info.worksheets[0];
    sheet.setHeaderRow(['cardTitle', 'animal', 'subject', 'points', 'name', 'email']);
  });
});


app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});
app.post('/newcard', function(req, res) {

  let card = req.body

  sheet.addRow({
    cardTitle: card.title,
    animal: card.animal,
    subject: card.Dare,
    points: card.points,
    name: card.name,
    email: card.email,
  }, function(err, row){
    console.log(row)
    row.save();

    res.sendfile(__dirname + "/dist/index.html");
  });
})
app.listen(port);

console.log("Server started...");
