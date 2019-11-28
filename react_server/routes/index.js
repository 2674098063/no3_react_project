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

router.post('/stu', upload.array(), async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let obj = req.body;
  let data = await find('stu', { ...obj })
  if (data.length) {
    res.json({ data, isLogin: true })
  } else {
    res.json({ isLogin: false })
  }
})

router.post('/setpsw', upload.array(), async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let obj = req.body;
  await updata('stu', { stu_id: obj.stu_id }, { stu_psw: obj.stu_psw })
})

router.get('/attendance', upload.array(), async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let url = req.originalUrl;
  url = url.split('?');
  let str = url[1].split('&')
  let data = {}
  str.map(item => {
    let arr = item.split('=')
    data[arr[0]] = arr[1]
  })
  console.log(data)
  await insert('attendance', [{ ...data }])
  res.send('1')
});

router.get('/setattendance', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let src = req.originalUrl;
  src = src.split('?');
  let arr = src[1].split('=');
  console.log(arr[1])
  let data = await find('attendance', {
    stu_id: arr[1]
  })
  res.json(data)
});

router.get('/stu_statu', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let src = req.originalUrl;
  src = src.split('?');
  let arr = src[1].split('=');
  console.log(arr[1])
  let data = await find('stu_statu', {
    stu_id: arr[1]
  });
  console.log(data)
  res.json(data)
});

router.get('/obtain_rew', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let data = await find('obtain_rew');
  console.log(data)
  res.json(data)
});

router.get('/obtain_pun', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let data = await find('obtain_pun');
  console.log(data)
  res.json(data)
});

router.get('/testTime', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let src = req.originalUrl;
  src = src.split('?');
  let arr = src[1].split('=');
  console.log(decodeURI(arr[1]))
  let data = await find('testTime', {
    stu_class: decodeURI(arr[1])
  });
  console.log(data)
  res.json(data)
});

router.get('/getchoose', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let data = await find('choose')
  res.json(data)
})
router.get('/getMy_choose', async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let data = await find('my_choose')
  res.json(data)
})
router.post('/setMy_choose', upload.array(), async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let obj = req.body;
  await insert('my_choose', [{ ...obj }])
  res.json(1)
})
router.post('/delMy_choose', upload.array(), async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let obj = req.body;
  console.log(obj.stu_id, obj.key)
  await remove('my_choose', { stu_id: obj.stu_id, key: obj.key })
  res.json(1)
})

router.post('/results', upload.array(), async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  let obj = req.body;
  let data = await find('results', { ...obj })
  res.json(data)
})

module.exports = router;
