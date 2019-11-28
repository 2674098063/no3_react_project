import React from 'react';
import { Table } from 'antd';
import axios from 'axios';
import cookie from '../../cookie'
const columns = [{
    title: '科目',
    dataIndex: 'name',
    render: text => <span>{text}</span>,
}, {
    title: '考试时间',
    dataIndex: 'time',
}, {
    title: '地点',
    dataIndex: 'address',
}];

export default class TestTime extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.loadTest();
    }
    loadTest() {
        let classNum = cookie.getCookie('stu_class')
        axios.get(`http://localhost:3000/testTime?stu_class=${classNum}`).then(({ data }) => {
            let nowtime = Date.now();
            // let str = data[1].time.split('/')[0] + ',00:00'
            // let str2 = data[1].time.split('/')[1].split('-')[1].split(':')
            // let timeNum = str2[0] * 60 * 60 * 1000 + str2[1] * 60 * 1000
            // let testTime = new Date(str).valueOf() + timeNum

            let arr = data.filter(item => {
                let str = item.time.split('/')[0] + ',00:00';
                let str2 = item.time.split('/')[1].split('-')[1].split(':');
                let timeNum = str2[0] * 60 * 60 * 1000 + str2[1] * 60 * 1000;
                let testTime = new Date(str).valueOf() + timeNum;
                if (nowtime < testTime) {
                    return item
                } else {
                    return 0;
                }
            })
            this.setState({
                data: arr
            })
        })

    }
    render() {
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={this.state.data}
                    bordered
                    title={() => '考试安排'}
                    footer={() =>
                        <>
                            <p>
                                考试前请检查是否带好学生证、身份证以及其他考试用品
                            </p>
                            <p>
                                考试期间，要遵守考试纪律
                            </p>
                            <p style={{ color: 'red' }}>
                                考试期间严禁作弊行为，一旦发现将处分记过；严重违反考试纪律的，将做退学处理。
                        </p>
                        </>
                    }
                />
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