import React from 'react'
import { Table } from 'antd';

const columns = [{
    title: '阶段',
    dataIndex: 'phase',
    key: 'phase',
    width: '40%',
}, {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    width: '30%',
}, {
    title: '班级',
    dataIndex: 'grade',
    key: 'grade',
}];

const data = [{
    key: 1,
    phase: '一阶段',
    time: '一个月',
    grade: '广州H5-1909',
    children: [{
        key: 11,
        phase: 'css/html',
        time: '2个星期',
        grade: '广州H5-1909',
    }, {
        key: 12,
        phase: 'html5/css3',
        time: '2个星期',
        grade: '广州H5-1909',
    }, {
        key: 13,
        phase: '阶段考核',
        time: '1天',
        grade: '广州H5-1909',
    }],
}, {
    key: 2,
    phase: '二阶段',
    time: '两个月',
    grade: '广州H5-1909',
    children: [{
        key: 21,
        phase: 'js基础',
        time: '一个月',
        grade: '广州H5-1909',
    }, {
        key: 22,
        phase: '月考',
        time: '1天',
        grade: '广州H5-1909',
    }, {
        key: 23,
        phase: 'js高级技巧',
        time: '一个星期',
        grade: '广州H5-1909',
    }, {
        key: 24,
        phase: 'jq',
        time: '一个星期',
        grade: '广州H5-1909',
    }, {
        key: 25,
        phase: '后端基础',
        time: '一个星期',
        grade: '广州H5-1909',
    }, {
        key: 26,
        phase: '二阶段考核',
        time: '一个星期',
        grade: '广州H5-1909',
    }]
}, {
    key: 3,
    phase: '三阶段',
    time: '两个月',
    grade: '广州H5-1909',
    children: [{
        key: 31,
        phase: 'nodejs',
        time: '一个星期',
        grade: '广州H5-1909'
    }, {
        key: 32,
        phase: 'vue',
        time: '三个星期',
        grade: '广州H5-1909',
        children: [{
            key: 321,
            phase: 'vue',
            time: '两个星期',
            grade: '广州H5-1909',
        }, {
            key: 322,
            phase: 'vue阶段考核',
            time: '一个星期',
            grade: '广州H5-1909',
        }]
    }, {
        key: 33,
        phase: 'react',
        time: '两个星期',
        grade: '广州H5-1909',
        children: [{
            key: 331,
            phase: 'react',
            time: '一个星期',
            grade: '广州H5-1909'
        }, {
            key: 332,
            phase: 'react考核',
            time: '一个星期',
            grade: '广州H5-1909'
        }]
    }, {
        key: 34,
        phase: '微信小程序',
        time: '一个星期',
        grade: '广州H5-1909',
    }, {
        key: 35,
        phase: '混合开发',
        time: '一个星期',
        grade: '广州H5-1909',
    }]
}];


export default class Schedule extends React.Component {
    render() {
        return (
            <div>
                <h4 style={{ fontSize: '20px' }}>课程安排</h4>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearTimeout(this.timeouter)
        this.setState = (state, callback) => {
            return
        }
    }
}