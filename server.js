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
  client_email: "chiken-editor@calcium-chalice-240911.iam.gserviceaccount.com",
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDFaWJBRjCIYRzq\nBbUoQqujPir0Ud2ao9M/KyM34hgL28/Wf76JmQ5Xdf2E/489L4YnnByJam57KCK6\n+RZjaGuRTsBEVkaNildgXt45lCPBwIYjnNBv+XBucP2rs2eC1nq1Dep5ToumNB4o\n81Zt56SSKR5yluqaZ1YguUYWzfYvwnH+sG0ccwWZg3Nle0MKoMdADU+5Ckw+lkAX\ntOlVD3wBYunmUInxtIhCR0fOY2UGeUvC3Pnr9ZIbacGCvnySUEV73JBi0AvEtLNF\nK0T2+oH1Exurn5b3i4/1uVTDyJpZMg77h1RGfEyJkwUPcpJCiq8WUpxNNvyr/ywc\noJ1GnqWBAgMBAAECgf9q5cXu0rM1JmEh2DVgt7l5jBB2fF4jftLFQfawLB4ZTc4d\nuM7Uc6zwb1P40Oofl7xtdnt9bcSlq/YiiP82lTSqWpqCZrWNr3vhE34Cb9Vs9XOt\nlRzJhaj8JPM4Js3Ga53GrOJrDb1RIqeyRRJoMSdMfjeelVo0ggCBd9IcRysocI28\nblgHMb0giaKn8xKHfhQNUWPcEAQeRwFZG362aDcRo5NU2L6wJqzUhVBNL+cma7Fj\n1T2niFBa8vTqJfeVEND+4Y+SnpO/ORRkP+6qSmMnW9qEZj7sep6nPB28yVTUaplc\nTYKCeLEMYssaIcDtV8MpZhlAK31+GBw0NLW1FtkCgYEA+aIUnoGm3XqZoMGuEQ0d\nGWwVks6k/b7vvwvEfh9Z78R5HSzvHBuKsUhy4Zos6t/EQ+TPNMhEv5jTtSxlzPHb\nr0HzFvkFOqB+TD8daKp1/1TUmDkIRtGd4m13RiZKeXEf65pfmp9f3raSSe6N5z5K\nFI5olE5U2kbpX1F8lXTI82kCgYEAynJV8jqyu7nB3VzHAKFKO3sOPHjpHToWdqh4\ncRUcZ5Q1epmrKA8kUkdCtI49BlcMHa9gZkm8bDmeA1sACBLkCcNbopZ5Dd4tBwOZ\nYaZdK7PfZPmgSrQr7ImuSNZ1dd8SgCB4hvvdCdWhOaZ0vzi0mK0DLGxEQfNbUtJn\n01k/FlkCgYEAymmV9oCCYQvMDgF9tu2/LqHpTESqm+V6WJqeFPYu4q+Y1QNeTpg2\neVGZdTyiN0CBz9tz+AR7Wi/9WeZKFUf3LcB376SzjLoeLozut7OgQgzy5Qs5ntLR\nBoxkLklWEeqcS1m9M48PGXNIYxI/lcV4I/rk6XwqaWMeT9+u+TDc0CECgYADBvqq\nCJ6rl/eCK+T96WuGwCxSUyyJN1kmpRZH+pzWH609DBc3HiLY6B/jO01GTv7rYrf6\nT5f1tlbajf3OIRov2y//mmhtAKmDtVYR078I7EOm6uSuuUr+2oA0rqBLBu7r45Bp\n1FJV10/14LtWMK7iqZOmkmfi5JS1BFhxHKCI4QKBgQC9RyBZN2V0StEWptfajySz\nNIarGs8ZcxJzGLzsWMcQp0XjUqH2tGi+iXIDaFn5NsEgybD+p70wR6G+jcFgeSDc\nBe2BAxiqYv5Ji4c382OqhvyK3phWknJTV66q1wY7iOpy/xhiPxQfrVp468kSJ4oI\n3Fykdtxmm9IZChnXbbg47Q==\n-----END PRIVATE KEY-----\n',
}

doc.useServiceAccountAuth(creds_json, function() {
  doc.getInfo(function(err, info) {
    sheet = info.worksheets[0];
    console.log(sheet)
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
    subject: card.subject,
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
