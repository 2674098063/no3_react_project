import React from 'react'
import styles from '../../assets/css/statu.css'
import stylep from '../../assets/css/base.css'
import { Input } from 'antd';
import axios from 'axios'
import cookie from '../../cookie'

export default class Status extends React.Component {
    state = {
        statu: {}
    }
    componentDidMount() {
        let id = cookie.getCookie('stu_id');
        let statu = cookie.getSession('_statu')
        if (!statu) {
            this.loadStatu(id);
        } else {
            this.setState({ statu: JSON.parse(statu) })
        }
    }

    async loadStatu(id) {
        let path = `http://localhost:3000/stu_statu?stu_id=${id}`
        axios.get(path).then(({ data }) => {
            // console.log(data)
            this.setState({ statu: data[0] })
            cookie.setSession('_statu', JSON.stringify(data[0]))
        })
    }
    render() {
        return (
            <>
                <h3 className={`${styles.head}`}>学籍</h3>
                <div className={`${styles.statu_main} ${stylep.clearfix}`}>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>年级</span>
                            :
                            {/* <span>2016</span> */}
                            <Input
                                value={this.state.statu.stu_class}
                                id="stu_class_"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>院系</span>
                            :
                            {/* <span>电气与计算机工程系</span> */}
                            <Input
                                value={this.state.statu.college}
                                id="college"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>专业方向</span>
                            :
                            {/* <span>计算机科学与技术（软件工程方向）</span> */}
                            <Input
                                value={this.state.statu.professional}
                                id="professional"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>班级</span>
                            :
                            {/* <span>计软161</span> */}
                            <Input
                                value={this.state.statu.stu_class}
                                id="stu_class"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>学制</span>
                            :
                            {/* <span>4</span> */}
                            <Input
                                value={this.state.statu.academic}
                                id="academic"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>学籍状态</span>
                            :
                            {/* <span>在读</span> */}
                            <Input
                                value={this.state.statu.status}
                                id="statu"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>是否在校</span>
                            :
                            {/* <span>是</span> */}
                            <Input
                                value={this.state.statu.istrue}
                                id="istrue"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>注册状态</span>
                            :
                            <Input
                                value={this.state.statu.registered}
                                id="registered"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>未注册原因</span>
                            :
                            <Input
                                value={this.state.statu.whyreg}
                                id="whyreg"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>学历层次</span>
                            :
                            {/* <span>3</span> */}
                            <Input
                                value={this.state.statu.level}
                                id="level"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>培养方式</span>
                            :
                            {/* <span>国家任务</span> */}
                            <Input
                                value={this.state.statu.way}
                                id="way"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>培养层次</span>
                            :
                            {/* <span>本科</span> */}
                            <Input
                                value={this.state.statu.cultivate}
                                id="cultivate"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>学生类别</span>
                            :
                            {/* <span>普通本科生</span> */}
                            <Input
                                value={this.state.statu.category}
                                id="category"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>招生专业</span>
                            :
                            {/* <span>计算机科学与技术（软件工程方向）</span> */}
                            <Input
                                value={this.state.statu.admissions}
                                id="admissions"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>招生年度</span>
                            :
                            {/* <span>2016</span> */}
                            <Input
                                value={this.state.statu.year}
                                id="year"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
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