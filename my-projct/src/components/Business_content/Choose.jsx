import React from 'react'
import { Table, Button, Popconfirm } from 'antd';
import axios from 'axios';
import qs from 'qs';
import cookie from '../../cookie'
const columns = [{
    title: '课程',
    width: '360px',
    fixed: true,
    dataIndex: 'name',
}, {
    title: '学分',
    width: '50px',
    dataIndex: 'score',
}, {
    title: '课程性质',
    width: '100px',
    dataIndex: 'type',
}, {
    title: '教师',
    width: '100px',
    dataIndex: 'teacher',
}, {
    title: '上课地点',
    width: '200px',
    dataIndex: 'place',
}, {
    title: '上课时间',
    width: '700px',
    dataIndex: 'time',
},];



const pagination = {
    pageSize: 5,
    showQuickJumper: true
}
export default class Choose extends React.Component {
    state = {
        data: [],
        selectedRowKeys: [], // Check here to configure the default column
        data2: [],
        my_data: [],
        arr: [],
        my_columns: [{
            title: '课程',
            width: '360px',
            dataIndex: 'name',
        }, {
            title: '教师',
            width: '100px',
            dataIndex: 'teacher',
        }, {
            title: '上课地点',
            width: '200px',
            dataIndex: 'place',
        }, {
            title: '上课时间',
            width: '700px',
            dataIndex: 'time',
        }, {
            title: '删除',
            dataIndex: 'operation',
            fixed: 'right',
            width: '100px',
            render: (text, record) => {
                return (
                    <Popconfirm title="确定删除吗?" onConfirm={() => this.onDelete(record.key)}>
                        <a href="href-no-hash">删除</a>
                    </Popconfirm>
                );
            }
        }]
    };

    onDelete(key) {
        const dataSource = [...this.state.my_data];
        this.setState({ my_data: dataSource.filter(item => item.key !== key) });
        axios.post('http://localhost:3000/delMy_choose', qs.stringify({
            stu_id: cookie.getCookie('stu_id'),
            key: key
        }))
    }
    componentDidMount() {
        this.getchoose();
        this.getmyMyChoose();
    }

    getchoose() {
        axios.get('http://localhost:3000/getchoose').then(({ data }) => {
            this.setState({
                data: data
            })
        })
    }
    getmyMyChoose() {
        axios.get('http://localhost:3000/getMy_choose').then(({ data }) => {
            this.setState({
                my_data: data
            })
        })
    }
    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
        let data2 = selectedRowKeys.map(i => {
            return this.state.data[i]
        })
        this.setState({
            data2: data2
        })
    }
    btnclick() {
        this.setState({
            arr: this.state.selectedRowKeys
        })
        this.updata();
        this.getmyMyChoose();
    }
    async updata() {
        await this.state.data2.forEach(item => {
            item.stu_id = '20160206'
            axios.post('http://localhost:3000/setMy_choose', qs.stringify({
                ...item
            }))
        })
        window.alert('完成')
    }
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            fixed: true,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            onSelection: this.onSelection
        };
        return (
            <>
                <div style={{ marginBottom: '20px' }}>
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={this.state.data}
                        size="small"
                        pagination={pagination}
                        scroll={{ x: 1700 }}
                    />
                    <Button size='large' onClick={this.btnclick.bind(this)}>提交</Button>
                </div>
                <div>
                    <Table
                        columns={this.state.my_columns}
                        dataSource={this.state.my_data}
                        size="small"
                        pagination={pagination}
                        scroll={{ x: 1500 }}
                    />
                </div>
            </>
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