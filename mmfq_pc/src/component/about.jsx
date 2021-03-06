/**
 * Created by ChinaHp on 2016/8/3.
 */
'use strict';
class R_About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nowState: 1,
            nowWork: '产品经理',
            nowDuty: ['负责公司官方网站(mmfenqi.com)的规划、策划和推进执行；', '负责产品市场调研，需求收集、分析和管理；', '持续分析运营数据，改进产品用户体验，对用户体验好评度负责；', '负责跨部门协调沟通，推动产品、研发、运营及市场等各部门工作；'],
            nowCondition: ['3年以上产品经理经验，有过大型网站或网站建设公司相关工作经验者优先；', '逻辑思维能力强，对数据敏感，熟悉用户体验理论知识；', '具备良好的沟通、协调能力，拥有强烈的责任心和团队协作精神；', '对于互联网最新技术和创新产品有着一定了解；', '会使用Axure和Visio或类似原型设计工具']
        }
    }

    changeState(value) {
        this.setState({
            nowState: value
        })
    }

    changeWork(item) {
        this.setState({
            nowWork: item.name,
            nowDuty: item.duty,
            nowCondition: item.condition
        })
    }

    componentWillMount() {

        var state = CommonService.getUrlParams('state');

        if (state != null){
            this.setState({
                nowState: state
            })
        }

        this.works = [
            {
                name: '产品经理',
                duty: ['负责公司官方网站(mmfenqi.com)的规划、策划和推进执行；', '负责产品市场调研，需求收集、分析和管理；', '持续分析运营数据，改进产品用户体验，对用户体验好评度负责；', '负责跨部门协调沟通，推动产品、研发、运营及市场等各部门工作；'],
                condition: ['3年以上产品经理经验，有过大型网站或网站建设公司相关工作经验者优先；', '逻辑思维能力强，对数据敏感，熟悉用户体验理论知识；', '具备良好的沟通、协调能力，拥有强烈的责任心和团队协作精神；', '对于互联网最新技术和创新产品有着一定了解；', '会使用Axure和Visio或类似原型设计工具']
            },
            {
                name: '区域经理',
                duty: ['根据公司下达的年度、季度、月度指标,执行具体实施；','负责对公司的政策、制度、策略、活动落实、执行、实施；','负责定期收集、整理、填写各类报表,按时回复公司；','负责对所辖区域内管理；','负责按公司规定,定期收集和反馈市场信息，并提出合理化建议供公司领导决策；','对所属城市的校园实习生进行培养与培训，提高团队战队力，挑战所谓的“不可能”；'],
                condition: ['大专以上学历，市场营销、管理类专业优先；','2年及以上一线销售及团队管理工作经验，有互联网行业经验优先；','擅长打造有执行力的团队，推动项目能力强；','出色的沟通能力、逻辑分析能力和执行能力']
            },
            {
                name: '信审专员',
                duty: ['对申请分期的客户进行调查；','对申请分期人提交文件的真实性、完整性进行核查；','核实申请人身份，收集其他必要文件和信息，提供必要的依据；'],
                condition: ['大专及以上学历，有金融、营销相关工作经验优先；应届生亦可。','具有1年以上相关工作经验者优先考虑；','具有良好的沟通能力，工作认真细心。']
            },
            {
                name: '医美顾问',
                duty: ['负责医疗美容项目的服务与咨询；','协助团队完成业绩目标；','协助做好对客销售、宣传及咨询工作；','维护与美容院合作的渠道，维护所辖区域市场；'],
                condition: ['性格开朗外向、有亲和力、抗压能力强；','1年工作经验者有限，具备一定的美容知识；','有医美方面的工作经验；','形象气质佳']
            },
            {
                name: '风控专员',
                duty: ['根据公司战略对产品进行风险评估和市场分析，制定风控计划与流程；','参与分期业务过程，完成信息收集和信息验证流程中规定的各项任务；','逐步建立量化的分期业务标准和自动化的业务流程，确保公司资产的综合风险预防；','及时向公司管理层提供分期业务监控和分期政策调整的建议。'],
                condition: ['全日制本科及以上，专业金融、会计、法律、计算机优先；','有信用卡、耐用品分期、小额贷款公司等个人消费金融领域经验优先考虑；','具备良好的沟通能力和优秀的团队精神']
            },
            {
                name: '客服专员',
                duty: ['在规定时间内及时处理客户反映问题；','落实内部业务受理、信息维护支持、数据统计等协调服务工作；','关注客户需求，与客户保持良好沟通，高效地解决客户问题，持续提高客户满意度。'],
                condition: ['高中以上学历，男女不限，应届生优先；','普通话标准，无方言口音，口齿清晰，反映灵敏，具备良好的倾听、沟通理解、语言及文字表达能力；','热爱客户服务工作，具备严谨、热情、耐心、细致等良好的客户服务意识，工作责任心强；','能承受工作压力，具备团队协作精神']
            }, {
                name: '社交媒体营销',
                duty: ['负责公司各类社交媒体账号的日常运营工作，增加粉丝数，提高关注度和影响力；','负责社交媒体原创内容的方案策划与编辑撰写工作，提升内容质量和传播度；','负责策划执行社交媒体平台的线上活动，并与粉丝互动，提升粉丝活跃度；','负责社交媒体相关业务线的探索工作，挖掘更多的客户开发模式和渠道；','负责社交媒体相关数据的整理统计工作，并分析用户行为与需求。'],
                condition: ['热爱互联网工作，对移动互联网有一定了解；','责任心强，能承受压力，具有良好的团队精神和服务意识；','对互联网热点事件敏感，有较强的信息搜编、整理能力；','具有一定的语言组织、文案策划、编辑撰写能力；','微信、微博控，擅长社会化媒体平台营销者优先']
            },
            {
                name: 'Andriod工程师',
                duty: ['根据公司产品发展方向，研发android手机APP应用开发；','根据产品需求完成模块设计、编码工作；','对现有程序、流程进行维护、完善和改造；','对产品的发展提出技术改进，提高产品核心竞争力；'],
                condition: ['有扎实的Java/C++语言基础，良好的数据结构及算法基础；','精通Android应用软件的编程架构；精通接口的开发；','熟练掌握Android界面布局及绘制、数据存储等；','熟悉Android系统架构；','熟悉网络通信机制，对Socket和HTTP有一定理解和经验；','具备良好的团队合作精神、文档和沟通能力，较强的责任心，抗压力强']
            },
            {
                name: 'IOS工程师',
                duty: ['负责公司现有iOS产品的开发和维护，准确理解新的产品需求，并进行独立的设计开发；','合理引入新技术，优化现有产品；','按既定的代码规范，编写易读、易维护、高质量、高效率的代码；','按既定的工作流程，与其他团队同事有效合作，快速解决问题；'],
                condition: ['1年以上IOS应用开发经验，大专或以上学历；','熟练掌握Objective C/Cocoa编程；','精通使用iPhone,ipad SDK、Interface Builder和Instruments等；','对IOS APP性能优化和内存优化有一定了解，熟练掌握IOS平台下的代码调试和调优技术；','熟悉常用的数据结构和IOS内存管理机制，对算法及设计模式有深入理解；','熟悉TCP/IP、Socket、HTTP等网络通信']
            }, {
                name: 'Web工程师',
                duty: ['与UI设计师、产品经理协作，分析给出最优的WEB、移动界面前端结构解决方案和效果实现；','负责网站原创、专题策划HTML5前端模板制作；','负责网站栏目建设前端设计以及HTML页面代码书写；'],
                condition: ['一年以上开发经验；','偏重JavaScript方向；','熟悉jQuery、Bootstrap，独自开发过jQuery插件为佳；','熟练掌握HTML5及CSS3标准；','知道并会使用AngularJS；','知道XSS原理及防范']
            },
            {
                name: 'Java工程师',
                duty: ['计算机相关专业专科以上学历；','3-5年以上JAVA项目开发经验；','熟悉设计模式，具有面向对象的分析和设计的能力；具有丰富的J2EE	架构设计经验；','精通java、Struts、spring、O/R映射工具（hibernate/ibatis），熟悉jsp、Jquary、JavaScript/Ajax；','熟悉统一建模语言（UML），能运用UML的方法和工具进行面向对象的分析和设计；','思路清晰，善于思考，能独立分析和解决问题；','责任心强，做事细心 、有恒心和毅力、具备良好的团队合作精神和承受压力的能力；'],
                condition: ['2 年及以上开发经验；','熟悉各种 Java 框架并且在项目中使用过；','熟悉 Redis；','至少另外会 Python、Ruby、Scala 中的一种；','掌握基本的前端知识，知道以及会使用 HTML5 标准']
            },
            {
                name: '软件测试',
                duty: ['根据产品设计、需求等文档设计测试用例；','完成产品的集成测试和系统测试；','测试过程中问题的发现、分析及追踪；','与开发组的协调沟通及问题解决；','根据项目开发总体计划制定测试计划、测试方案。'],
                condition: ['熟悉Sql语言，有Linux基本操作经验，会编写常规的测试脚本；','一年以上web测试工作经验，熟悉常用web测试工具；','具备良好的沟通能力、团队合作精神和文档编写能力；','熟练使用bug管理工具、版本控制工具者优先；','精通软件测试理论、测试方法；','熟悉性能测试、自动化测试经验者优先；','有配置管理、质量分析或物联网相关测试经验者优先考虑']
            },
            {
                name: '资深UI设计师',
                duty: ['负责产品相关的软件界面设计、图标设计，设定软件的整体视觉风格；','与项目需求人员、UE设计人员一起共同完成系统原型设计；','负责项目产品整体表现风格的定位，对产品视觉感受做整体把握；','设计并制作产品所需界面图形，规范文档；','与产品团队配合，共同提升系统的视觉表现力及易用性，跟踪效果，提出设计改善方案'],
                condition: ['专科及以上学历；','具有较强的设计创新，逻辑思维，专业分析能力；','1年以上UI设计工作经验；','能够熟练使用Photoshop等平面设计软件完成设计工作；','精通移动设备界面与网页设计，能与前端工程师紧密配合；','创新能力强，责任心强，具有较好的团队合作意识；','有优秀的移动设备和Web UI作品者优先']
            }
        ]
    }


    render() {

        var duties = this.state.nowDuty.map(function (item, index) {
            return (
                <div style={{marginTop: 3}}>
                    {index + 1}、 {item}
                </div>
            )
        });

        var works = this.works.map( (item, index) => {
            return (
                <span onClick={this.changeWork.bind(this,item)} style={{marginRight: 22,marginTop: 10,display: 'inline-block',color: this.state.nowWork == item.name ? '#FD657A' : '#666',cursor: 'pointer'}}>{item.name}</span>
            )
        });

        var conditions = this.state.nowCondition.map(function (item, index) {
            return (
                <div style={{marginTop: 3}}>
                    {index + 1}、 {item}
                </div>
            )
        });

        return (
            <div>
                <div>
                    <img src="../static/images/about/banner.jpg" style={{width: '100%'}}/>
                </div>
                <div className="wrap" style={{width:1200,margin:'0 auto'}}>
                    <div
                        style={{float:'left',width:192,minHeight: '300px',fontSize: 18, color: '#666',textAlign:'center'}}>
                        <div onClick={this.changeState.bind(this,1)} style={{cursor: 'pointer',marginTop: 40}}>
                            {
                                this.state.nowState == 1 ?
                                    <div style={{color: '#FD657A'}}>
                                        公司简介
                                        <img src="../static/images/about/red-dot.png"
                                             style={{position: 'absolute',marginLeft: 40,marginTop: -2}}/>
                                    </div>
                                    :
                                    <div>
                                        公司简介
                                        <img src="../static/images/about/grey-dot.png"
                                             style={{position: 'absolute',marginLeft: 53,marginTop: 5}}/>
                                    </div>
                            }
                        </div>
                        <div onClick={this.changeState.bind(this,2)} style={{cursor: 'pointer',marginTop: 40}}>
                            {
                                this.state.nowState == 2 ?
                                    <div style={{color: '#FD657A'}}>
                                        团队风采
                                        <img src="../static/images/about/red-dot.png"
                                             style={{position: 'absolute',marginLeft: 40,marginTop: -2}}/>
                                    </div>
                                    :
                                    <div>
                                        团队风采
                                        <img src="../static/images/about/grey-dot.png"
                                             style={{position: 'absolute',marginLeft: 53,marginTop: 5}}/>
                                    </div>
                            }
                        </div>
                        <div onClick={this.changeState.bind(this,3)} style={{cursor: 'pointer',marginTop: 40}}>
                            {
                                this.state.nowState == 3 ?
                                    <div style={{color: '#FD657A'}}>
                                        联系我们
                                        <img src="../static/images/about/red-dot.png"
                                             style={{position: 'absolute',marginLeft: 40,marginTop: -2}}/>
                                    </div>
                                    :
                                    <div>
                                        联系我们
                                        <img src="../static/images/about/grey-dot.png"
                                             style={{position: 'absolute',marginLeft: 53,marginTop: 5}}/>
                                    </div>
                            }
                        </div>
                        <div onClick={this.changeState.bind(this,4)} style={{cursor: 'pointer',marginTop: 40}}>
                            {
                                this.state.nowState == 4 ?
                                    <div style={{color: '#FD657A'}}>
                                        加入我们
                                        <img src="../static/images/about/red-dot.png"
                                             style={{position: 'absolute',marginLeft: 40,marginTop: -2}}/>
                                    </div>
                                    :
                                    <div>
                                        加入我们
                                        <img src="../static/images/about/grey-dot.png"
                                             style={{position: 'absolute',marginLeft: 53,marginTop: 5}}/>
                                    </div>
                            }
                        </div>
                    </div>
                    <div
                        style={{float: 'left',width:926,paddingBottom: 20,borderLeft:'1px solid #ececec',paddingLeft: 80,textAlign: 'left',paddingTop: 60}}>
                        {
                            this.state.nowState == 1
                                ?
                                <div style={{minHeight: 500}}>
                                    <div style={{fontSize: 40,color: '#333'}}>
                                        公司简介
                                    </div>
                                    <div
                                        style={{width:'100%',backgroundColor: '#f0f0f0',marginTop: 15,marginBottom:30,height: 1}}></div>
                                    <div style={{fontSize:14,paddingLeft:30,color:'#808080'}}>
                                        美眉分期是杭州优呗网络科技有限公司旗下网站，国内首家女性消费金融平台，公司成立于2015年5月，总部位于杭州市 西湖区文
                                        三路金融圈，是面向在校女大学生提供微整形分期付款服务的在线平台，创始团队拥有丰富的金融、医美、电商、校园 推广等行业
                                        经验，为女大学生提供安全可靠的分期整形产品、完善的微整体验和超前的分期服务；已与多家国内知名整形医院签 订战略合作伙
                                        伴，医美专家全程陪同，确保过程正规安全可靠，分期付款轻松求美。
                                    </div>
                                </div>
                                :
                                ''
                        }
                        {
                            this.state.nowState == 2
                                ?
                                <div style={{minHeight: 500}}>
                                    <div style={{fontSize: 40,color: '#333'}}>
                                        团队风采
                                    </div>
                                    <div
                                        style={{width:'100%',backgroundColor: '#f0f0f0',marginTop: 15,marginBottom:30,height: 1}}></div>
                                    <div style={{fontSize:14,paddingLeft:30,color:'#808080'}}>
                                        <img src="../static/images/about/6.jpg"
                                             style={{width: '32%',marginRight: '1%'}}/>
                                        <img src="../static/images/about/2.jpg"
                                             style={{width: '32%',marginRight: '1%'}}/>
                                        <img src="../static/images/about/3.jpg" style={{width: '33%'}}/>
                                        <img src="../static/images/about/4.jpg"
                                             style={{width: '32%',marginRight: '1%',marginTop:'1%'}}/>
                                        <img src="../static/images/about/5.jpg"
                                             style={{width: '32%',marginRight: '1%',marginTop:'1%'}}/>
                                        <img src="../static/images/about/1.jpg" style={{width: '32%',marginTop:'1%'}}/>
                                    </div>
                                </div>
                                :
                                ''
                        }
                        {
                            this.state.nowState == 3
                                ?
                                <div style={{minHeight: 500}}>
                                    <div style={{fontSize: 40,color: '#333'}}>
                                        联系我们
                                    </div>
                                    <div
                                        style={{width:'100%',backgroundColor: '#f0f0f0',marginTop: 15,marginBottom:30,height: 1}}></div>
                                    <div style={{fontSize:14,paddingLeft:30,color:'#808080'}}>
                                        <div style={{width: '49%',float: 'left'}}>
                                            <div>公司地址：杭州市西湖区文三路478号华星时代广场B座403室</div>
                                            <div style={{marginTop: 30}}>客服电话：400-711-8898</div>
                                            <div style={{marginTop: 30}}>公司网站： www.mmfenqi.com</div>
                                            <div style={{marginTop: 30}}>公司邮箱： hr@mmfenqi.com</div>
                                            <div style={{marginTop: 30}}>企业QQ ：2962344972</div>
                                            <div style={{marginTop: 30}}>联系人 ：肖小姐</div>
                                        </div>
                                        <div style={{width: '49%',float:'left'}}>
                                            <iframe src="../static/map/address.html" width="439" height="293" frameborder="0" scrolling="no"></iframe>
                                        </div>
                                    </div>
                                </div>
                                :
                                ''
                        }
                        {
                            this.state.nowState == 4
                                ?
                                <div style={{minHeight: 500}}>
                                    <div style={{fontSize: 40,color: '#333'}}>
                                        加入我们
                                    </div>
                                    <div
                                        style={{width:'100%',backgroundColor: '#f0f0f0',marginTop: 15,marginBottom:30,height: 1}}></div>
                                    <div style={{fontSize:14,paddingLeft:30,color:'#808080'}}>
                                        <div>
                                            {works}
                                        </div>
                                        <div>
                                            <div style={{marginTop: 35}}>
                                                <div style={{marginBottom: 5}}>
                                                    岗位职责:
                                                </div>
                                                {duties}
                                            </div>
                                            <div style={{marginTop: 30}}>
                                                <div style={{marginBottom: 5}}>
                                                    任职条件:
                                                </div>
                                                {conditions}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}
