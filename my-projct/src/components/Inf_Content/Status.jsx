import React from 'react'
import styles from '../../assets/css/statu.css'
import stylep from '../../assets/css/base.css'
import { Input } from 'antd';

export default class Status extends React.Component {
    state = {
        statu: {
            grade: '2016',
            college: '电气与计算机工程系',
            professional: '计算机科学与技术（软件工程方向）',
            stu_class: '计软161',
            academic: '4',
            status: '在读',
            istrue: '是',
            registered: '已注册',
            whyreg: '',
            level: '3',
            way: '国家任务',
            cultivate: '本科',
            category: '普通本科',
            admissions: '计算机科学与技术（软件工程方向）',
            year: '2016'
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <>
                <h3>学籍</h3>
                <div className={`${styles.statu_main} ${stylep.clearfix}`}>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>年级</span>
                            :
                            {/* <span>2016</span> */}
                            <Input
                                value={this.state.statu.grade}
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
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
                                id="stu_id"
                                disabled
                                className={`${styles.ant_input}`}
                            />
                        </p>
                    </div>


                </div>
            </>
        )
    }
}