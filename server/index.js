const express = require("express");
const cors = require('cors');
const Gtts = require("node-gtts");
var bodyParser = require('body-parser')

const app = express();
const port = 3005;

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'))


// create router for text to speech api
app.post("/text-to-speech", (req, res) => {
  const lang = req.body.lang;
  const gtts = new Gtts(lang);
  const fileName =  '/uploads/music_'+ Date.now() +'.mp3'
  const filePath =__dirname + fileName;
  const text = req.body.text
  try {
    gtts.save( filePath , text,()=>{
      res.json({
        success:true,
        fileName
      })
    });
  } catch (error) {
    res.json({
      success:false,
    })
  }

});

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.json("sss");
//   // res.set({"Content-Type": "audio/mpeg"});
//   // gtts("ar").stream("hello are you ?").pipe(res);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
