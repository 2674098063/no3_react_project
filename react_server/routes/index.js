var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  console.log(req.method)
  next();
});

const {
  find,
  insert,
  updata,
  remove,
  finds
} = require('../mongo/index');

/* GET home page. */
router.get('/stu_basic', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let src = req.originalUrl;
  src = src.split('?');
  let arr = src[1].split('=');
  console.log(arr[1])
  let data = await find('stu_basic', {
    stu_id: arr[1]
  });
  console.log(data)
  res.json(data)
});
router.post('/stu_setbasic', upload.array(), async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  let obj = req.body
  // await updata('stu_basic', { stu_id: obj.stu_id }, { ...obj })
  console.log(obj)
  let obk = {}
  for (var i in obj) {
    if (i != '_id') {
      obk[i] = obj[i]
    }
  }

  console.log(obk)
  await updata('stu_basic', { stu_id: obj.stu_id }, { ...obk })
  res.json(0)
});

module.exports = router;
