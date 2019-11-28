import React from 'react';
import styles from '../../assets/css/room.css'
import { Input, DatePicker, TimePicker, Button, Cascader, message } from 'antd';
import moment from 'moment';


import 'moment/locale/zh-cn';
const { TextArea } = Input;
moment.locale('zh-cn');
const format = 'HH:mm';
const error = () => {
    message.error('请填写完整');
};
export default class ClassRoom extends React.Component {
    state = {
        data: {
            applicants: '',
            responsibility: '',
            tel: '',
            onclass: [],
            date: '',
            startTime: '',
            endTime: '',
            reason: ''
        },
        options: [{
            value: '1教',
            label: '1教',
            children: [{
                value: '113',
                label: '113',
            }, {
                value: '205',
                label: '205',
            }, {
                value: '阶3',
                label: '阶3-1楼大教室',
            }],
        }, {
            value: '2教',
            label: '2教',
            children: [{
                value: '208',
                label: '208',
            }, {
                value: '301',
                label: '301',
            }, {
                value: '505',
                label: '505',
            }],
        }]

    }


    applicants(e) {
        this.setState({
            data: {
                ...this.state.data,
                applicants: e.target.value
            }
        })
    }
    responsibility(e) {
        this.setState({
            data: {
                ...this.state.data,
                responsibility: e.target.value
            }
        })
    };
    tel(e) {
        this.setState({
            data: {
                ...this.state.data,
                tel: e.target.value
            }
        })
    }
    onclass(value) {
        this.setState({
            data: {
                ...this.state.data,
                onclass: value
            }
        })
    }
    onChangeStart(date, dateString) {
        this.setState({
            data: {
                ...this.state.data,
                date: dateString
            }
        })

    }
    startHMTime(date, dateString) {
        this.setState({
            data: {
                ...this.state.data,
                startTime: dateString
            }
        })
    }
    endHMTime(date, dateString) {
        this.setState({
            data: {
                ...this.state.data,
                endTime: dateString
            }
        })
    }

    reason(e) {
        this.setState({
            data: {
                ...this.state.data,
                reason: e.target.value
            }
        })
    }

    submit() {
        let { applicants, responsibility, onclass, date, startTime, endTime, reason } = this.state.data
        if (applicants && responsibility && onclass && date && startTime && endTime && reason) {
            console.log('提交')
        } else {
            error();
        }
    }
    render() {
        const { options } = this.state
        const { applicants, responsibility, tel } = this.state.data
        return (
            <div>
                <h4>教室申请</h4>
                <div>
                    <div className={`${styles.mt}`}>
                        <span className={`${styles.ml_r} ${styles.min}`}>申请人：</span>
                        <Input
                            value={applicants}
                            className={`${styles.ml_r} ${styles.input_size}`}
                            onChange={this.applicants.bind(this)}

                        />
                        <span className={`${styles.ml_r} ${styles.min}`}>担保人：</span>
                        <Input
                            value={responsibility}
                            className={`${styles.ml_r}  ${styles.input_size}`}
                            onChange={this.responsibility.bind(this)}
                        />
                    </div>
                    <div className={`${styles.mt}`}>
                        <span className={`${styles.ml_r} ${styles.min}`}>教室：</span>
                        <Cascader
                            options={options}
                            className={`${styles.ml_r}`}
                            onChange={this.onclass.bind(this)}
                            placeholder="选择教室"
                        />
                        <span className={`${styles.ml_r} ${styles.min}`}>联系方式：</span>
                        <Input
                            value={tel}
                            placeholder="qq/微信/手机"
                            className={`${styles.ml_r} `}
                            onChange={this.tel.bind(this)}
                            style={{ width: '160px' }}
                        />
                    </div>
                    <div className={`${styles.mt}`}>
                        <span className={`${styles.ml_r} ${styles.min}`}>申请时间：</span>
                        <DatePicker
                            className={`${styles.ml_r}`}
                            placeholder="日期"
                            locale='zh-cn'

                            onChange={this.onChangeStart.bind(this)}
                        />
                        <TimePicker
                            className={`${styles.ml_r}`}
                            id="start"
                            onChange={this.startHMTime.bind(this)}
                            defaultValue={moment('00:00', format)}
                            format={format}
                        />
                        <span >至</span>
                        <TimePicker
                            className={`${styles.ml_r}`}
                            onChange={this.endHMTime.bind(this)}
                            defaultValue={moment('00:00', format)}
                            format={format}
                        />
                    </div>
                    <div className={`${styles.mt}`}>
                        <span className={`${styles.ml_r} ${styles.min}`} style={{ verticalAlign: 'top' }}>事由：</span>
                        <TextArea
                            className={`${styles.ml_r}`}
                            placeholder="申请理由、用途"
                            onChange={this.reason.bind(this)}
                            style={{
                                maxWidth: '500px',
                                minWidth: '240px',
                                verticalAlign: 'top',
                                minHeight: '120px',
                                maxHeight: '300px'
                            }}
                        />
                    </div>
                </div>
                <div className={`${styles.mt}`}>
                    <span className={`${styles.ml_r} ${styles.min}`}></span>
                    <Button className={`${styles.ml_r}`} onClick={this.submit.bind(this)}>提交</Button>
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