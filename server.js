const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser');
const async = require('async');
const GoogleSpreadsheet = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1DEFkYE5vDo-NrHLMnt1a9A9fGV1MkGFy86humWb0gAc');
const Mailchimp = require('mailchimp-api-v3')

const mailchimp = new Mailchimp(process.env.mailchimp_key);
let sheet;
let creds_json
// const creds = require('./client_secret.json')

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

async.series([
  (step) => {
    creds_json = {
      client_email: process.env.client_email,
      private_key: process.env.private_key,
    };
    creds_json.private_key = creds_json.private_key.replace(/&/gi, '\n')
    step();
  },
  (step) => {
    console.log(creds_json);
    doc.useServiceAccountAuth(creds_json, function() {
      doc.getInfo(function(err, info) {
        if(!err) {
          sheet = info.worksheets[0];
          sheet.setHeaderRow(['cardTitle', 'animal', 'subject', 'points', 'name', 'email']);
          console.log(sheet)
        }
      });
    });
    step();
  }
])


app.use(express.static(__dirname + "/dist/"));
app.get('/', function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});
app.post('/newcard', function(req, res) {

  let card = req.body

  sheet.addRow({
    cardTitle: card.title,
    animal: card.animal,
    subject: card.subject,
    points: card.points,
    name: card.name,
    email: card.email,
  }, function(err, row){
    console.log(row)
    row.save();

    res.sendfile(__dirname + "/dist/newcard.html");
  });
})

app.post('/subscribe', function(req, res) {
  let data = req.body;
  mailchimp.post('/lists/6990e00fdc/members', {
    email_address : data.email,
    status : 'subscribed',
    merge_fields: {
       FNAME: data.name,
     }
  }).then((respone, err)=> {
    res.send(respone);
  }).catch(err => {
    res.send(err)
  });
})
app.get('/faq', (req, res) => {
  res.sendfile(__dirname + "/dist/faq.html");
})
app.listen(port);

console.log("Server started...");
