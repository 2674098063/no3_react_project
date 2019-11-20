const {
    find,
    insert,
    updata,
    remove,
    finds
} = require('../mongo/index');

insert('obtain_pun', [{
    key: '1',
    name: '张焜博',
    disciplinary_time: '2016-9-1',
    disciplinary_name: '留校察看',
    discipline_type: '',
    discipline_time: '',
    undisciplinary_time: '2016-9-1',
    undisciplinary_why: 'test-测试',
    undisciplinary_num: '10001'
}, {
    key: '2',
    name: '张焜博',
    disciplinary_time: '',
    disciplinary_name: '',
    discipline_type: '测试',
    discipline_time: '2030-3-3',
    undisciplinary_time: '',
    undisciplinary_why: '',
    undisciplinary_num: ''
}])