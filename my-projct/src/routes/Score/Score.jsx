import React from 'react';
import { Table } from 'antd';
import axios from 'axios'
import qs from 'qs'
import cookie from '../../cookie'
const columns = [
    { title: '学号', width: 100, dataIndex: 'xh', key: 'xh', fixed: 'left' },
    { title: '姓名', width: 100, dataIndex: 'xm', key: 'xm', fixed: 'left' },
    { title: '学年', dataIndex: 'xnmmc', key: 'xnmmc' },
    { title: '学期', dataIndex: 'xqmmc', key: 'xqmmc' },
    { title: '课程名称', dataIndex: 'kcmc', key: 'kcmc' },
    { title: '课程讲师', dataIndex: 'jsxm', key: 'jsxm' },
    { title: '课程性质', dataIndex: 'kcxzmc', key: 'kcxzmc' },
    { title: '学分', dataIndex: 'xf', key: 'xf' },
    { title: '绩点', dataIndex: 'jd', key: 'jd' },
    { title: '考核性质', dataIndex: 'ksxz', key: 'ksxz' },
    { title: '课程标记', dataIndex: 'kcbj', key: 'kcbj' },
    { title: '课程类别', dataIndex: 'kclbmc', key: 'kclbmc' },
    {
        title: '成绩',
        dataIndex: 'cj',
        key: 'cj',
        fixed: 'right',
        width: 100,
        render: (value) => {
            if (value >= 90) {
                return <span style={{ color: 'orange' }}>{value}</span>
            } else if (value >= 80) {
                return <span style={{ color: '#58bc58' }}>{value}</span>
            } else if (value < 60) {
                return <span style={{ color: 'red' }}>{value}</span>
            } else {
                return <span style={{ color: '#1890ff' }}>{value}</span>
            }
        },
    },

];
const pagination = {
    defaultPageSize: 5,
    pageSize: 5,
    showQuickJumper: true,
}
// const data = [{
//     key: '1',
//     xm: '张焜博',//姓名
//     xh: '20160206',//学号
//     xnmmc: '2016-2017',//学年
//     xqmmc: '1',//学期
//     kcmc: '入学教育',//课程名称
//     kcxzmc: '集中实践课',//课程性质
//     xf: '0',//学分
//     cj: '71',//成绩
//     jd: '8.00',//绩点
//     ksxz: '正常考试',//考核性质
//     kcbj: '主修',//课程标记
//     kclbmc: '',//课程类别
//     jsxm: '王亓剑'//课程讲师
// },];
export default class Score extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.loadScore();
    }
    loadScore() {
        axios.post('http://localhost:3000/results', qs.stringify({
            xh: cookie.getCookie('stu_id')
        })).then(({ data }) => {
            let arr = data.map((item, index) => {
                item.key = index + 1;
                return item
            })
            this.setState({
                data: arr
            })
        })
    }
    render() {
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <div style={{
                    maxWidth: '1000px',
                    minWidth: '450px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)'
                }}>
                    <Table
                        columns={columns}
                        dataSource={this.state.data ? this.state.data : ''}
                        pagination={pagination}
                        scroll={{ x: 1300 }}
                        title={() => <h1>成绩单</h1>}
                        style={{
                            maxWidth: '1000px',
                            minWidth: '450px',
                            minHeight: '360px', position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)'
                        }}
                    />
                </div>
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