import React from 'react'
import styles from '../../assets/css/obt.css'
import { Table } from 'antd';
import axios from 'axios'

const renderContent = (value, row, index) => {
    const obj = {
        children: value,
        props: {},
    };
    if (index === 4) {
        obj.props.colSpan = 0;
    }
    return obj;
};

const rewcolumns = [{
    title: '姓名',
    dataIndex: 'name',
    render: (text, row, index) => {
        return {
            children: <span>{text}</span>,
        };
    },
}, {
    title: '时间',
    dataIndex: 'time',
    render: renderContent,
}, {
    title: '奖项',
    dataIndex: 'rew_name',
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        return obj;
    },
}, {
    title: '奖励级别',
    dataIndex: 'lev',
    render: renderContent,
}, {
    title: '奖励方式',
    dataIndex: 'way',
    render: renderContent,
}, {
    title: '奖励金额',
    dataIndex: 'amount',
    render: renderContent,
}];

const puncolumns = [{
    title: '姓名',
    dataIndex: 'name',
    render: renderContent
}, {
    title: '处分时间',
    dataIndex: 'disciplinary_time',
    render: renderContent
}, {
    title: '处分名称',
    dataIndex: 'disciplinary_name',
    render: renderContent
}, {
    title: '违纪类型',
    dataIndex: 'discipline_type',
    render: renderContent
}, {
    title: '违纪时间',
    dataIndex: 'discipline_time',
    render: renderContent
}, {
    title: '撤销处分时间',
    dataIndex: 'undisciplinary_time',
    render: renderContent
}, {
    title: '撤销处分原因',
    dataIndex: 'undisciplinary_why',
    render: renderContent
}, {
    title: '撤销处分文号',
    dataIndex: 'undisciplinary_num',
    render: renderContent
}]
export default class Obtain extends React.Component {
    state = {
        rewdata: [],
        pundata: []
    }
    componentDidMount() {
        this.loadrew()
        this.loadpun()
    }
    loadrew() {
        axios.get('http://localhost:3000/obtain_rew').then(({ data }) => {
            this.setState({
                rewdata: data
            })
        })
    }
    loadpun() {
        axios.get('http://localhost:3000/obtain_pun').then(({ data }) => {
            this.setState({
                pundata: data
            })
        })
    }
    render() {
        return (
            <>
                <div className={`${styles.reward}`}>
                    <h4>获奖情况</h4>
                    <div className={`${styles.rew_box}`}>
                        <Table
                            columns={rewcolumns}
                            dataSource={this.state.rewdata}
                            bordered
                            size="small"
                        />
                    </div>
                </div>
                <div className={`${styles.punishment}`}>
                    <h4>违纪处分</h4>
                    <div className={`${styles.pun_box}`}>
                        <Table
                            columns={puncolumns}
                            dataSource={this.state.pundata}
                            bordered
                            size="small"
                        />
                    </div>
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