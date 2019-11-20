import React from 'react'
import Photo from '../../assets/yay.jpg'
import styles from '../../assets/css/inf.css'
import stylep from '../../assets/css/base.css'
import axios from 'axios'
import { Collapse, Button, Form, Input, Select, notification, DatePicker } from 'antd';
import moment from 'moment';
import qs from "qs";
import cookie from '../../cookie'
// const { MonthPicker, RangePicker } = DatePicker;
const Panel = Collapse.Panel;
const Option = Select.Option;

const dateFormat = 'YYYY-MM-DD';
export default class Basic extends React.Component {
    state = {
        disabled: true,
        btntype: true,
        stuBasic: {}
    }
    componentDidMount() {
        let basic = window.sessionStorage.getItem('stuBasic');
        if (!basic) {
            this.loadBasic()
        } else {
            this.setState({
                stuBasic: JSON.parse(window.sessionStorage.getItem('stuBasic'))
            })
        }
    }
    async loadBasic() {
        let mystu_id = cookie.getCookie('stu_id')
        await axios.get(`http://localhost:3000/stu_basic?stu=${mystu_id}`).then(({ data }) => {
            window.sessionStorage.setItem('stuBasic', JSON.stringify(data[0]))
            this.setState({
                stuBasic: data[0]
            })
        })
    }
    async upload() {
        await axios.post('http://localhost:3000/stu_setbasic', qs.stringify({
            ...this.state.stuBasic
        }))

    }
    modify() {
        if (!this.state.btntype) {
            this.upload();
            window.sessionStorage.setItem('stuBasic', JSON.stringify(this.state.stuBasic))
        }
        this.setState({
            btntype: !this.state.btntype,
            disabled: !this.state.disabled
        })
    }

    /**
     * 输入框格式判断
     */
    stuBlur(e) {
        if (!e.target.value.trim()) {
            this.openNotificationWithIcon('error')
            e.target.focus()
        }
    }
    openNotificationWithIcon = (type) => {
        notification[type]({
            message: '格式错误',
            description: '请检查格式是否正确 如果不正确，本次修改将无法提交',
        });
    }

    stuCarIdBlur(e) {
        // console.log(e.target.value)
        if (this.state.stuBasic.stu_cardType === '居民身份证') {
            var reg = /^(\d{17}|\d{14})[\dxX]$/;
            let cardId = reg.test(e.target.value.trim());
            if (!cardId) {
                this.openNotificationWithIcon('error')
                e.target.focus()
            }
        }
    }
    /**
     * 修改信息
     */

    stuname(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_name: e.target.value.trim()
            }
        })
    }
    stugender(value) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_gender: value.trim()
            }
        })
    }
    stupinyin(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_stupinyin: e.target.value.trim()
            }
        })
    }
    stucardType(value) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_cardType: value.trim()
            }
        })
    }
    stucardId(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_cardId: e.target.value.trim()
            }
        })
    }
    sturace(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_race: e.target.value.trim()
            }
        })
    }
    stuidentity(value) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_identity: value.trim()
            }
        })
    }
    stubirthday(dates, dateStrings) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_birthday: dateStrings
            }
        })
    }
    stuplace(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_place: e.target.value.trim()
            }
        })
    }
    econtact(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                econtact: e.target.value.trim()
            }
        })
    }
    stuclass(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                stu_class: e.target.value.trim()
            }
        })
    }
    dormitory(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                dormitory: e.target.value.trim()
            }
        })
    }
    dormitorynum(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                dormitory_num: e.target.value.trim()
            }
        })
    }
    bloodtype(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                blood_type: e.target.value.trim()
            }
        })
    }
    stuheight(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                height: e.target.value.trim()
            }
        })
    }
    stuweight(e) {
        this.setState({

            stuBasic: {
                ...this.state.stuBasic,
                weight: e.target.value.trim()
            }
        })
    }
    render() {
        return (
            <>
                <h3 className="inf_header">学生档案</h3>
                <Button type={this.state.btntype ? 'danger' : 'primary'} className={`${styles.modify}`} onClick={this.modify.bind(this)}>修改</Button>
                <div className={`${styles.inf_table} ${stylep.clearfix}`}>
                    <Form>
                        <div className={`${styles.inf_mian} ${stylep.clearfix}`}>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>学号</span>：
                                    <Input
                                        value={this.state.stuBasic.stu_id}
                                        id="stu_id"
                                        disabled
                                        className={`${styles.ant_input}`}
                                    />
                                </div>
                            </div>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>姓名</span>：
                                    <Input
                                        value={this.state.stuBasic.stu_name}
                                        onChange={this.stuname.bind(this)}
                                        onBlur={this.stuBlur.bind(this)}
                                        id="stu_name"
                                        disabled={this.state.disabled}
                                        className={`${styles.ant_input}`}
                                    />
                                </div>
                            </div>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>性别</span>：
                                    <Select
                                        style={{ minWidth: 100, maxWidth: 180 }}
                                        disabled={this.state.disabled}
                                        className={`${styles.select}`}
                                        placeholder={this.state.stuBasic.stu_gender}
                                        onChange={this.stugender.bind(this)}
                                    >
                                        <Option value="男">男</Option>
                                        <Option value="女">女</Option>
                                        <Option value="其他">其他</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>姓名拼音</span>：
                                    <Input
                                        value={this.state.stuBasic.stu_stupinyin}
                                        id="stu_pinyin"
                                        onChange={this.stupinyin.bind(this)}
                                        disabled={this.state.disabled}
                                        className={`${styles.ant_input}`}
                                    />
                                </div>
                            </div>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>证件类型</span>：
                                    <Select
                                        style={{ minWidth: 100, maxWidth: 180 }}
                                        disabled={this.state.disabled}
                                        className={`${styles.select}`}
                                        placeholder={this.state.stuBasic.stu_cardType}
                                        onChange={this.stucardType.bind(this)}
                                    >
                                        <Option value="居民身份证">居民身份证</Option>
                                        <Option value="港澳通行证">港澳通行证</Option>
                                        <Option value="台湾通行证">台湾通行证</Option>
                                        <Option value="其他">其他</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>证件号码</span>：
                                    <Input
                                        value={this.state.stuBasic.stu_cardId}
                                        id="stu_cardId"
                                        onBlur={this.stuCarIdBlur.bind(this)}
                                        onChange={this.stucardId.bind(this)}
                                        disabled={this.state.disabled}
                                        className={`${styles.ant_input}`}
                                    />
                                </div>
                            </div>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>民族</span>：
                                <Input
                                        value={this.state.stuBasic.stu_race}
                                        id="stu_race"
                                        onChange={this.sturace.bind(this)}
                                        disabled={this.state.disabled}
                                        onBlur={this.stuBlur.bind(this)}
                                        className={`${styles.ant_input}`}
                                    />
                                </div>
                            </div>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>政治面貌</span>：
                                    <Select
                                        style={{ minWidth: 100, maxWidth: 180, fontSize: 12 }}
                                        disabled={this.state.disabled}
                                        className={`${styles.select}`}
                                        placeholder={this.state.stuBasic.stu_identity}
                                        onChange={this.stuidentity.bind(this)}
                                    >
                                        <Option value="中国共产主义青年团团员">中国共产主义青年团团员</Option>
                                        <Option value="中国共产党党员">中国共产党党员</Option>
                                        <Option value="群众">群众</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>出生日期</span>：
                                    <DatePicker
                                        allowClear={false}
                                        disabled={this.state.disabled}
                                        value={moment(`${this.state.stuBasic.stu_birthday ? this.state.stuBasic.stu_birthday : '2000-1-1'}`, dateFormat)}
                                        // defaultValue={moment(`${this.state.stuBasic.stu_birthday ? this.state.stuBasic.stu_birthday : '2000-1-1'}`, dateFormat)}
                                        onChange={this.stubirthday.bind(this)}
                                        format={dateFormat} />
                                </div>
                            </div>
                            <div className={`${styles.inf_text}`}>
                                <div className={`${styles.text_inf}`}>
                                    <span>籍贯</span>：
                                    <Input
                                        value={this.state.stuBasic.stu_place}
                                        id="stu_place"
                                        disabled={this.state.disabled}
                                        onChange={this.stuplace.bind(this)}
                                        onBlur={this.stuBlur.bind(this)}
                                        className={`${styles.ant_input}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.inf_img}`}>
                            <img className="inf_photo" src={Photo} alt="" />
                        </div>
                        <div className={`${styles.inf_more}`}>
                            <Collapse bordered={false}>
                                <Panel header="更多" key="1">
                                    <div className={`${styles.inf_text}`}>
                                        <div className={`${styles.text_inf}`}>
                                            <span>QQ/微信</span>：
                                            <Input
                                                value={this.state.stuBasic.econtact}
                                                id="econtact"
                                                disabled={this.state.disabled}
                                                onChange={this.econtact.bind(this)}
                                                className={`${styles.ant_input}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.inf_text}`}>
                                        <div className={`${styles.text_inf}`}>
                                            <span>班级</span>：
                                            <Input
                                                placeholder="计软161"
                                                id="stu_class"
                                                onChange={this.stuclass.bind(this)}
                                                disabled={this.state.disabled}
                                                className={`${styles.ant_input}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.inf_text}`}>
                                        <div className={`${styles.text_inf}`}>
                                            <span>辅导员</span>：
                                            <Input
                                                value={this.state.stuBasic.stu_moment}
                                                id="mentor"
                                                disabled
                                                className={`${styles.ant_input}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.inf_text}`}>
                                        <div className={`${styles.text_inf}`}>
                                            <span>入学日期</span>：
                                            <Input
                                                value={this.state.stuBasic.admission}
                                                id="admission"
                                                disabled
                                                className={`${styles.ant_input}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.inf_text}`}>
                                        <div className={`${styles.text_inf}`}>
                                            <span>寝室</span>：
                                            <Input
                                                value={this.state.stuBasic.dormitory}
                                                id="dormitory"
                                                disabled={this.state.disabled}
                                                onChange={this.dormitory.bind(this)}
                                                className={`${styles.ant_input}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.inf_text}`}>
                                        <div className={`${styles.text_inf}`}>
                                            <span>床号</span>：
                                            <Input
                                                placeholder="4"
                                                id="dormitory_num"
                                                disabled={this.state.disabled}
                                                onChange={this.dormitorynum.bind(this)}
                                                className={`${styles.ant_input}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.inf_text}`}>
                                        <div className={`${styles.text_inf}`}>
                                            <span>血型</span>：
                                            <Input
                                                value={this.state.stuBasic.blood_type}
                                                id="blood_type"
                                                disabled={this.state.disabled}
                                                onChange={this.bloodtype.bind(this)}
                                                className={`${styles.ant_input}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.inf_text}`}>
                                        <div className={`${styles.text_inf}`}>
                                            <span>身高</span>：
                                            <Input
                                                value={this.state.stuBasic.height}
                                                id="height"
                                                disabled={this.state.disabled}
                                                onChange={this.stuheight.bind(this)}
                                                className={`${styles.ant_input}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.inf_text}`}>
                                        <div className={`${styles.text_inf}`}>
                                            <span>体重</span>：
                                            <Input
                                                value={this.state.stuBasic.weight}
                                                id="weight"
                                                disabled={this.state.disabled}
                                                onChange={this.stuweight.bind(this)}
                                                className={`${styles.ant_input}`}
                                            />
                                        </div>
                                    </div>
                                </Panel>

                            </Collapse>
                        </div>
                    </Form>
                </div>
            </>
        )
    }
}