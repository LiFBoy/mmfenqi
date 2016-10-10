'usr strict';
import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';


import {HttpService, Toast} from'../Http';

import {doLogin, change} from '../action/index'


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import '../less/index.less'

import '../less/deviceList.less'

import '../less/my.bootstrap.min.css'

import usrimg from '../../src/img/user.png'

import qiehuan from '../../src/img/qiehuan.png'

import dian2 from '../../src/img/dianliang1.png'
import dian3 from '../../src/img/dianliang2.png'
import dian4 from '../../src/img/dianliang3.png'
import dian1 from '../../src/img/didianliang.png'
import dian from '../../src/img/lixian.png'

import add from '../../src/img/add.png'

import wifi from '../../src/img/wifi.png'

import touxiang from '../../src/img/touxiang.png'

import shouqi from '../../src/img/shouqi.png'


import dingweixiao  from '../../src/img/dingweixiao.png'

import tonghuaxiao from '../../src/img/tonghuaxiao.png'

import zhankai from '../../src/img/zhankai.png'

import tonghua from '../../src/img/tonghua.png'

import anquan from '../../src/img/anquan.png'

import tianjia from '../../src/img/tianjia.png'

import more from '../../src/img/more.png'


import jianhuchengyuan  from '../../src/img/jianhuchengyuan.png'


import  genghuan from '../../src/img/genghuan.png'

import  jiebang from '../../src/img/jiebang.png'

class MapIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: '120.153576',
            lat: '30.287459',
            isOpen: false,
            mapHeight: '100%',
            mapBottom: '13.5rem',
            checked: false,
            babyname: '',
            babyid: '',

            _isopen: true,

            list: [
                {
                    img: '../../src/img/bind/baba.png',
                    img1: '../../src/img/bind/baba1.png',
                    familystatus: '爸爸',
                    ds: '此称呼对应为设备按键'
                },
                {
                    img: '../../src/img/bind/ma.png',
                    img1: '../../src/img/bind/ma1.png',
                    familystatus: '妈妈',
                    ds: '此称呼对应为设备按键'
                },
                {
                    img: '../../src/img/bind/family.png',
                    img1: '../../src/img/bind/family1.png',
                    familystatus: '家庭',
                    ds: '此称呼对应为设备按键'
                },
                {
                    img: '../../src/img/bind/gege.png',
                    img1: '../../src/img/bind/gege1.png',
                    familystatus: '哥哥',
                    ds: '此称呼对应为家庭成员'
                },
                {
                    img: '../../src/img/bind/jiejie.png',
                    familystatus: '姐姐',
                    img1: '../../src/img/bind/jiejie1.png',
                    ds: '此称呼对应为家庭成员'
                },
                {
                    img: '../../src/img/bind/tr.png',
                    img1: '../../src/img/bind/tr1.png',
                    familystatus: '班主任',
                    ds: '仅作为添加班主任时使用'
                },
                {
                    img: '../../src/img/bind/shu.png',
                    img1: '../../src/img/bind/shu1.png',
                    familystatus: '叔叔',
                    ds: '此称呼对应为家庭成员'
                },
                {
                    img: '../../src/img/bind/ye.png',
                    img1: '../../src/img/bind/ye1.png',
                    familystatus: '爷爷',
                    ds: '此称呼对应为家庭成员'
                },
                {
                    img: '../../src/img/bind/nai.png',
                    img1: '../../src/img/bind/nai1.png',
                    familystatus: '奶奶',
                    ds: '此称呼对应为家庭成员'
                },
                {
                    img: '../../src/img/bind/wai.png',
                    img1: '../../src/img/bind/wai1.png',
                    familystatus: '外公',
                    ds: '此称呼对应为家庭成员'
                },
                {
                    img: '../../src/img/bind/waipo.png',
                    img1: '../../src/img/bind/waipo1.png',
                    familystatus: '外婆',
                    ds: '此称呼对应为家庭成员'
                }
            ]
        };
    }

    componentWillMount() {

        console.log(this.props);

        window.localStorage.sid = this.props.params.sid;



        if(this.props.values==''){
            this.props.doLogin(this.props.params.sid);

        }





    }


    _change(babyname, babyid, headimg, babytelephone, e) {
        e.preventDefault();

        this.setState({
            checked: false,
        });

        const data = {
            babyname: babyname,
            babyid: babyid,
            babytelephone: babytelephone,
            headimg: headimg,
        };


        this.props.change(data);


    }

    more() {
        this.setState({
            checked: true
        })
    }

    changeAge(f) {
        HttpService.query({
            url: '/app/object/saveBaby',
            data: {
                familystatus: f,
                babyid: this.props.babyid,
                token: localStorage.appToken
            },
            success: (res=> {
                console.log(res);

                if (res.code == '10042') {
                    this.setState({
                        _isopen: false,
                    })
                } else {
                    Toast.toast(res.msg, 3000);
                }
            })
        })


    }

    render() {


        const {babyName, babytelephone, list, babyid, headimg, values, lng, lat, gpstime, getGuardiansList, _checked}=this.props;



        var isOpen = this.state.isOpen;
        var mapHeight = this.state.mapHeight;
        const mapBottom = this.state.mapBottom;
        const checked = this.state.checked;


        return (
            <div>
                {
                    checked == true ?
                        <div>
                            <div className="_z"></div>
                            <div className="layer_content">
                                <div className="header">
                                    <div className="title">我的设备</div>
                                </div>
                                <div className="layer_content2">
                                    {
                                        list.map((json, index)=> {
                                            return (
                                                <div className="device-info" key={index}
                                                     onClick={this._change.bind(this, json.babyname, json.babyid, json.headimg, json.babytelephone)}>
                                                    <div className="headimg"><img src={"/media" + json.headimg} style={{
                                                        width: '3.4rem',
                                                        height: '3.4rem'
                                                    }}/></div>
                                                    <div className="info">
                                                        <div className="name">{json.babyname}</div>
                                                        <div className="time">设备有效日期{json.starttime}</div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                        :
                        null
                }

                {
                    _checked == 'true' ?
                        <div>
                            <div className="add-device">

                            </div>

                            <div className="add-device-content">
                                <div className="content">
                                    <div style={{width: '20rem', height: '25rem', position: 'relative'}}>

                                        <img src={add} style={{width: '20rem', height: '25rem'}}/>

                                        <Link to="/AddDevice">
                                            <div className="_btn btn_btn">添加设备</div>
                                        </Link>

                                    </div>


                                </div>

                            </div>


                        </div> :
                        null
                }

                {
                    getGuardiansList.isOpen == true && this.state._isopen == true ?

                        <div>
                            <div className="_zz"></div>
                            <div className="layer_content3">
                                <div className="header">
                                    <div className="title">选择成员关系</div>
                                </div>
                                <div className="layer_content4">


                                    {
                                        getGuardiansList.map((json, index)=> {
                                            return <div className="row" key={index}
                                                        onClick={this.changeAge.bind(this, json.familystatus)}>

                                                <div className="left">
                                                    {
                                                        json.check == true ?
                                                            <img src={json.img1}/> :
                                                            <img src={json.img}/>
                                                    }

                                                </div>
                                                <div className="right">

                                                    {
                                                        json.title != '家庭' ?

                                                            <div className="one">我是{json.familystatus}</div> :
                                                            <div className="one">{json.familystatus}</div>

                                                    }

                                                    <div className="two">{json.ds}</div>

                                                </div>
                                            </div>
                                        })
                                    }


                                </div>


                            </div>


                        </div> :
                        null

                }


                <div className="box">
                    <div className="box1">
                        <img src={"/media" + headimg} style={{width: '3.4rem', height: '3.4rem'}}/>
                    </div>
                    <div className="box2">
                        <div className="babyName">
                            <span className="row1">{babyName}</span>
                            <span className="row2">[上报时间]</span>
                            <span className="row3">{}</span>
                            <img src={wifi} style={{width: '1.2rem', height: '1.2rem'}}/>&nbsp;

                            {
                                values == '0' ?
                                    <img src={dian} style={{width: '1.3rem', height: '1.1rem'}}/>
                                    :
                                    values == '1' ?
                                        <img src={dian1} style={{width: '1.8rem', height: '1.1rem'}}/>
                                        :
                                        values == '2' ?
                                            <img src={dian2} style={{width: '1.8rem', height: '1.1rem'}}/>
                                            :
                                            values == '3' ?
                                                <img src={dian3} style={{width: '1.8rem', height: '1.1rem'}}/>
                                                :
                                                values == '4' ?
                                                    <img src={dian4} style={{width: '1.8rem', height: '1.1rem'}}/>
                                                    :
                                                    null
                            }


                        </div>
                        <div className="addr">
                            {gpstime}
                        </div>

                    </div>

                    <div className="box3" onClick={this.more.bind(this)}>
                        <img src={qiehuan} style={{width: '2.2rem', height: '3rem'}}/>
                    </div>
                    {/*<div className="box3">*/}
                    {/*<Link to="/deviceList"><img src={qiehuan} style={{width:'2.2rem',height:'3rem'}}/></Link>*/}
                    {/*</div>*/}
                </div>
                <div id="container" style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    bottom: mapBottom,
                    overflow: 'hidden',
                    margin: '0'
                }}>

                    {/*<div style={{position:'absolute',bottom:'5rem',left:'2rem',zIndex:'3'}} onClick={this.isOpen.bind(this)}>开始</div>*/}
                </div>

                {
                    isOpen == true ?
                        <div className="little-menu" style={{
                            height: '4.5rem',
                            background: '#fff',
                            width: '100%',
                            position: 'absolute',
                            bottom: '0'
                        }}>
                            <div onClick={this.getLocation.bind(this, lng, lat)}>
                                <img src={dingweixiao} style={{width: '2.1rem', height: '2.1rem'}}/>
                                <div>定位</div>
                            </div>
                            <div onClick={this.isOpen.bind(this)}>
                                <img src={zhankai} style={{width: '2.3rem', height: '2.3rem'}}/>
                                <div>展开</div>
                            </div>
                            <div>
                                <a href={"tel:" + babytelephone}>
                                    <img src={tonghuaxiao} style={{width: '2.1rem', height: '2.1rem'}}/>
                                    <div>通话</div>
                                </a>
                            </div>
                        </div>
                        :
                        <div className="menu" style={{
                            height: '13.5rem',
                            background: '#fff',
                            width: '100%',
                            position: 'absolute',
                            bottom: '0'
                        }}>

                            <div className="option" onClick={this.getLocation.bind(this, lng, lat)}>
                                <img src={usrimg} style={{width: '2.3rem', height: '2.3rem'}}/>
                                <div>定位</div>
                            </div>
                            <div className="option">
                                <a href={"tel:" + babytelephone}>
                                    <img src={tonghua} style={{width: '2.3rem', height: '2.3rem'}}/>
                                    <div>通话</div>
                                </a>
                            </div>
                            <div className="option">
                                <Link to="/about">
                                    <img src={jianhuchengyuan} style={{width: '2.3rem', height: '2.3rem'}}/>

                                    <div>监护成员</div>
                                </Link>
                            </div >
                            <div className="option">
                                <img src={anquan} style={{width: '2.3rem', height: '2.3rem'}}/>

                                <div>安全区域</div>
                            </div>
                            <div className="option">
                                <Link to="/AddDevice">
                                    <img src={tianjia} style={{width: '2.3rem', height: '2.3rem'}}/>
                                    <div>添加设备</div>
                                </Link>
                            </div>
                            <div className="option">
                                <img src={genghuan} style={{width: '2.3rem', height: '2.3rem'}}/>
                                <div>更换设备</div>
                            </div>
                            <div className="option">
                                <img src={jiebang} style={{width: '2.3rem', height: '2.3rem'}}/>
                                <div>解绑设备</div>
                            </div>
                            <div className="option">
                                <img src={more} style={{width: '2.3rem', height: '2.3rem'}}/>
                                <div>更多</div>
                            </div>


                            <div className="shouqi" onClick={this.isOpen.bind(this)}>
                                <img src={shouqi} style={{width: '2.1rem', height: '2.1rem'}}/>
                                <div>收起</div>
                            </div>


                        </div>
                }

            </div>
        )
    }

    getLocation(lng, lat) {

        this.init(lng, lat);
    }


    isOpen() {

        console.log(this.state.isOpen);

        if (!this.state.isOpen) {
            this.setState({
                isOpen: true,
                mapBottom: '4.5rem'
            });

        } else {
            this.setState({
                isOpen: false,
                mapBottom: '13.5rem'
            });
        }

    }

    init(lng, lat) {
        var mapObj, marker;
        mapObj = new AMap.Map('container', {
            zoom: 15,
            center: [lng, lat],
            resizeEnable: true,
        });


        marker = new AMap.Marker({
            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        });
        marker.setMap(mapObj);
    }
}


const mapStateToProps = state => {
    return {
        list: state.login.list,
        babyName: state.login.babyName,
        babyid: state.login.babyid,
        babytelephone: state.login.babytelephone,
        headimg: state.login.headimg,
        values: state.login.values,
        lng: state.login.lng,
        lat: state.login.lat,
        gpstime: state.login.gpstime,
        getGuardiansList: state.login.getGuardiansList,
        _checked: state.login.checked
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        doLogin: doLogin,
        change: change
    }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(MapIndex);

