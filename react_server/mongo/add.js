const {
    find,
    insert,
    updata,
    remove,
    finds
} = require('../mongo/index');

insert('stu_basic', [{
    stu_id: 20160206,
    stu_name: '张焜博',
    stu_gender: '男',
    stu_stupinyin: 'zhangkunbo',
    stu_cardType: '居民身份证',
    stu_cardId: '45048119970206221X',
    stu_race: '汉族',
    stu_identity: '中国共产主义青年团团员',
    stu_birthday: '1997-2-6',
    stu_place: '广西',
    econtact: '841997517',
    stu_class: '计软161',
    stu_moment: '梁聪',
    admission: '2016-9-11',
    dormitory: '10-354',
    dormitory_num: '4',
    blood_type: '',
    height: '170cm',
    weight: '49kg'
}])