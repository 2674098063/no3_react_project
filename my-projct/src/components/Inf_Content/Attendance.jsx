import React from 'react'
import { Input, DatePicker, TimePicker, Button, Table, message } from 'antd';
import moment from 'moment';
import styles from '../../assets/css/attend.css';
import stylep from '../../assets/css/base.css';
import cookie from '../../cookie';
import axios from 'axios'
// import qs from "qs";
const { TextArea } = Input;
const format = 'HH:mm';

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
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    width: '120px',
    render: (text, row, index) => {

        return {
            children: <span >{text}</span>,
            props: {},
        };
    },
}, {
    title: '原因',
    dataIndex: 'reason',
    width: '360px',
    render: renderContent,
}, {
    title: '请假时间',
    colSpan: 2,
    dataIndex: 'start',
    width: '180px',
    render: (value, row, index) => {
        const obj = {
            children: value,
            props: {},
        };
        return obj;
    },
}, {
    title: '结束时间',
    colSpan: 0,
    dataIndex: 'end',
    width: '180px',
    render: renderContent,
}, {
    title: '班主任',
    dataIndex: 'director',
    render: (text, row, index) => {
        if (text === '已同意') {
            return {
                children: <span style={{ color: '#58bc58' }}>{text}</span>,
                props: {},
            }
        } else {
            return {
                children: <span>等待通过</span>,
                props: {},
            }
        }
    },
}, {
    title: '讲师',
    dataIndex: 'lecturer',
    render: (text, row, index) => {
        if (text === '已同意') {
            return <span style={{ color: '#58bc58' }}>{text}</span>
        } else {
            return <span>等待通过</span>
        }
    }
}, {
    title: '申请时间',
    dataIndex: 'apply',
    render: renderContent,
}];


export default class Attendance extends React.Component {
    state = {
        apply: {
            startHM: '00:00',
            endHM: '00:00',
        },
        data: [],
    }
    componentDidMount() {
        let stu_id = cookie.getCookie('stu_id')
        let stu_name = cookie.getCookie('stu_name')
        let now = new Date()
        let newY = now.getFullYear();
        let newm = now.getMonth() + 1;
        let newd = now.getDate();
        let newh = now.getHours();
        let newmm = now.getMinutes();
        let nowTime = newY + '-' + newm + '-' + newd + '-' + newh + '-' + newmm
        this.setState({
            apply: {
                ...this.state.apply,
                stu_id: stu_id,
                stu_name: stu_name,
                nowTime: nowTime
            }
        })
        this.loadattend();
    }
    async loadattend() {
        let stu_id = cookie.getCookie('stu_id')
        await axios.get(`http://localhost:3000/setattendance?stu_id=${stu_id}`).then(({ data }) => {
            let arr = []
            data.forEach((item, index) => {
                arr.push({
                    key: index + 1,
                    name: decodeURI(item.stu_name),
                    reason: decodeURI(item.reason),
                    start: item.startTime + '/' + item.startHM,
                    end: item.endTime + '/' + item.endHM,
                    director: item.director ? decodeURI(item.director) : '',
                    lecturer: item.lecturer ? decodeURI(item.lecturer) : '',
                    apply: item.nowTime
                })
            })
            this.setState({
                data: arr
            })
        })
    }
    success = () => {
        const hide = message.loading('正在提交..', 0);
        // Dismiss manually and asynchronously
        setTimeout(hide, 2500);
    }
    onChangeStart(date, dateString) {
        this.setState({
            apply: {
                ...this.state.apply,
                startTime: dateString
            }
        })
    }
    onChangeEnd(date, dateString) {
        let startTime = new Date(this.state.apply.startTime)
        let endTime = new Date(dateString)
        if (startTime <= endTime) {
            this.setState({
                apply: {
                    ...this.state.apply,
                    endTime: dateString
                }
            })
        } else {
            this.endTimeError();
        }
    }
    endTimeError() {
        message.error('时间设置错误，请重新设置');
    }
    startHMTime(time, timeString) {
        this.setState({
            apply: {
                ...this.state.apply,
                startHM: timeString
            }
        })
    }
    endHMTime(time, timeString) {
        if (this.state.apply.startTime === this.state.apply.endTime) {
            let sHm = this.state.apply.startHM
            let eHm = timeString
            let sArr = sHm.split(':')
            let eArr = eHm.split(':')
            let sTime = sArr[0] * 60 + sArr[1] * 1
            let eTime = eArr[0] * 60 + eArr[1] * 1
            if (sTime < eTime) {
                this.setState({
                    apply: {
                        ...this.state.apply,
                        endHM: timeString
                    }
                })
            } else {
                this.endTimeError();

            }
        } else {
            this.setState({
                apply: {
                    ...this.state.apply,
                    endHM: timeString
                }
            })
        }

    }
    blurReason(e) {
        this.setState({
            apply: {
                ...this.state.apply,
                reason: e.target.value
            }
        })
    }
    submiterror() {
        message.error('请将假条填写完整');
    }
    submitBtn() {
        let { startTime, endTime, reason, endHM, startHM } = this.state.apply
        this.success()
        if (startTime && endTime && reason && endHM && startHM) {
            axios({
                method: 'get',
                url: 'http://localhost:3000/attendance',
                params: {
                    ...this.state.apply
                }
            }).then(() => {
                this.loadattend();
            })
        } else {
            this.submiterror();
        }
    }
    render() {
        return (
            <>
                <div className={`${styles.ask_for_leave}`}>
                    <h4>请假申请</h4>
                    <div className={`${styles.leave} ${stylep.clearfix}`}>
                        <div className={`${styles.leave_head} ${stylep.clearfix}`}>
                            <div className={`${styles.box}`}>
                                <span>姓名 ：</span>

                                <Input
                                    value="张焜博"
                                    id="stu_id"
                                    disabled
                                    className={`${styles.ant_input}`}
                                />
                            </div>
                            <div className={`${styles.box}`}>
                                <span>请假时间 ：</span>

                                <DatePicker


                                    onChange={this.onChangeStart.bind(this)}
                                />
                                <TimePicker
                                    className={`${styles.hmtime}`}
                                    onChange={this.startHMTime.bind(this)}
                                    defaultValue={moment('00:00', format)}
                                    format={format}
                                />
                                <span>至</span>
                                <DatePicker

                                    onChange={this.onChangeEnd.bind(this)}
                                />
                                <TimePicker
                                    className={`${styles.hmtime}`}
                                    onChange={this.endHMTime.bind(this)}
                                    defaultValue={moment('00:00', format)}
                                    format={format}
                                />
                            </div>
                        </div>
                        <div className={`${styles.whymiss} ${stylep.clearfix}`}>
                            <span>请假事由：</span>
                            <TextArea
                                className={`${styles.whyText}`}
                                rows="5"
                                cols="33"
                                onBlur={this.blurReason.bind(this)}
                            />
                        </div>
                        <div className={`${styles.leavebox_btn} ${stylep.clearfix}`}>
                            <Button
                                type="primary"
                                className={`${styles.leave_btn}`}
                                onClick={this.submitBtn.bind(this)}
                            >申请</Button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.askTable}`}>
                    <h4>请假记录</h4>
                    <Table columns={columns} dataSource={this.state.data} bordered size='small' />
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