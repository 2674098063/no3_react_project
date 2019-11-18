import React from 'react'
import styles from '../../assets/css/statu.css'
import stylep from '../../assets/css/base.css'
export default class Status extends React.Component {
    render() {
        return (
            <>
                <h3>学籍</h3>
                <div className={`${styles.statu_main} ${stylep.clearfix}`}>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>年级</span>
                            :
                            <span>2016</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>院系</span>
                            :
                            <span>电气与计算机工程系</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>专业方向</span>
                            :
                            <span>计算机科学与技术（软件工程方向）</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>班级</span>
                            :
                            <span>计软161</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>学制</span>
                            :
                            <span>4</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>学籍状态</span>
                            :
                            <span>在读</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>是否在校</span>
                            :
                            <span>是</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>注册状态</span>
                            :
                            <span>已注册</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>未注册原因</span>
                            :
                            <span> </span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>学历层次</span>
                            :
                            <span>3</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>培养方式</span>
                            :
                            <span>国家任务</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>培养层次</span>
                            :
                            <span>本科</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>学生类别</span>
                            :
                            <span>普通本科生</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>招生专业</span>
                            :
                            <span>计算机科学与技术（软件工程方向）</span>
                        </p>
                    </div>
                    <div className={`${styles.statu_text}`}>
                        <p className={`${styles.text_statu}`}>
                            <span>招生年度</span>
                            :
                            <span>2016</span>
                        </p>
                    </div>


                </div>
            </>
        )
    }
}