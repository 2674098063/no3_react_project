const {
    find,
    insert,
    updata,
    remove,
    finds
} = require('../mongo/index');

insert('testTime', [{
    key: '1',
    name: '高数',
    stu_class: '计软161',
    time: '2019-11-30/19:00-21:00',
    address: '实-420',
}, {
    key: '2',
    name: '应用英语',
    stu_class: '计软161',
    time: '2019-11-20/9:00-11:00',
    address: '1教-203',
}, {
    key: '3',
    name: '马哲',
    stu_class: '计软161',
    time: '2019-11-25/14:00-15:30',
    address: '2教-208',
}, {
    key: '3',
    name: '马哲',
    stu_class: '计软162',
    time: '2019-11-25/14:00-15:30',
    address: '2教-208',
}, {
    key: '3',
    name: '马哲',
    stu_class: '计软163',
    time: '2019-11-25/14:00-15:30',
    address: '2教-208',
}])