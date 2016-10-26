'usr strict';


import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {R_header_fixed} from './common/index';
import {HttpService ,Toast}  from'../Http';

import { Link} from 'react-router';


export default class Safetyarea extends React.Component{

    constructor(props){
        super(props);
        this.state={
            list:[],

            _delete:false,

            hasDelete:false,

            noDelete:false,
            classleft1:{
                width:'100%',
            },
            classright1:{
                width:'0',
            }

        };


        this.startx='';
        this.contentwidth='';
        this.starty=''



    }

    componentWillMount(){
        this.getSafeRegions1();
        window.localStorage.babyid=this.props.params.babyid;

        console.log(localStorage.babyid)
    }










    TouchStart(index,e){


        console.log('1:'+this.state._delete)
        console.log('2:'+this.state.hasDelete)
        console.log('3:'+this.state.noDelete)










        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)

         this.startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser
         this.starty = parseInt(touchobj.clientY); // get x position of touch point relative to left edge of browser

         this.contentwidth=document.getElementById('contentWidth'+index).offsetWidth-1;


        console.log('start'+this.startx)







    }

    TouchEnd(index,e){





        var touchobj = e.changedTouches[0];


        console.log('end'+touchobj.clientX);

        const contentwidth=this.contentwidth;



        var self=this;

         // reference first touch point for this event

        const itemstyle=document.getElementById('item'+index).style;
        const deletestyle=document.getElementById('delete'+index).style;



        var numRange = 5;
        if(this.starty - touchobj.clientY >numRange||this.starty - touchobj.clientY ==numRange){
            console.log('上')

        }else if(this.starty - touchobj.clientY < -numRange){
            console.log('下')

        }else {
            console.log(this.startx)
            console.log(touchobj.clientX)


            if (this.startx < touchobj.clientX ) {

                self.setState({
                    classleft1: {
                        width: contentwidth,

                        transition: 'all 0.1s  ease-out',

                    },
                    classright1: {
                        width: '0',
                        transition: 'all 0.1s ease-out',


                    }
                });


                self.setState({
                    hasDelete:false
                });


                itemstyle.width = contentwidth + 'px';

                itemstyle.transition = self.state.classleft1.transition;


                deletestyle.width = 0 + 'px';
                deletestyle.transition = self.state.classright1.transition;






            } else if(this.startx - touchobj.clientX>1) {


                if(!!self.state.hasDelete){
                    return
                }



                self.setState({
                    classleft1: {
                        width: contentwidth-parseInt(contentwidth/4),
                        transition:'all 0.1s ease-in',

                    },
                    classright1: {
                        width: parseInt(contentwidth/4),
                        transition:'all 0.1s ease-in',

                    }
                });

                self.setState({
                    hasDelete:true
                });

                itemstyle.width=contentwidth-parseInt(contentwidth/4)+'px';


                itemstyle.transition=self.state.classleft1.transition;


                deletestyle.width=parseInt(contentwidth/4)+'px';
                deletestyle.transition=self.state.classright1.transition;

            }


        }




    }

    TouchMove(index,e){


        var self=this;
        var touchobj = e.changedTouches[0]; // reference first touch point for this event

        var dist = parseInt(touchobj.clientX) - this.startx;


        console.log('move'+touchobj.clientX);

        console.log('dist'+parseInt(-dist));

        const itemstyle=document.getElementById('item'+index).style;
        const deletestyle=document.getElementById('delete'+index).style;

        const contentwidth=this.contentwidth;
        console.log(touchobj.clientY-this.starty);

        var numRange = 5;
        if(this.starty - touchobj.clientY >numRange||this.starty - touchobj.clientY ==numRange){
            console.log('上')

        }else if(this.starty - touchobj.clientY < -numRange){
            console.log('下')

        }else{

            e.preventDefault();
            if(parseInt(-dist)>1){
                    console.log('出来');




                }else{

            }




                // else if(parseInt(-dist)<30){
                //
                //
                //
                //
                //     var leftWidth = contentwidth + dist;
                //
                //
                //     self.setState({
                //         classleft1: {
                //             width: leftWidth,
                //             transition:'all 1s ease-in'
                //         },
                //         classright1: {
                //             width: parseInt(-dist),
                //             transition:'all 1s ease-in'
                //
                //         }
                //     });
                //
                //
                //     itemstyle.width=leftWidth+'px';
                //
                //     itemstyle.transition=self.state.classleft1.transition;
                //
                //
                //     deletestyle.width=parseInt(-dist)+'px';
                //     deletestyle.transition=self.state.classright1.transition;
                //
                // }



        }










     }



    getSafeRegions(){
        this.S_init(localStorage.safeRegions)
    }


    deleteSafeRegions(regionid,index){

        HttpService.query({
            url:'/app/map/deleteSafeRegions',
            data:{
                token:localStorage.appToken,
                babyid:this.props.params.babyid,
                regionids:regionid,
            },
            success:(res=>{

                console.log(res);

                if(res.code!=200){


                    this.setState({
                        hasDelete:false
                    });


                    var node=document.getElementById('item'+index);

                    //console.log(node)

                    node.parentNode.parentNode.remove()
                }else{
                    Toast.toast(res.msg,3000);
                }


              //  console.log(document.getElementById('item'+index).parentNode.parentNode.removeChild())




            })
        })
    }


    getSafeRegions1(){
        HttpService.query({
            url:'/app/map/getSafeRegions',
            data:{
                token:localStorage.appToken,
                babyid:this.props.params.babyid,
                pageindex:1,
                pagesize:50
            },
            success:(res=>{

                if(res.code=='10048'){

                    this.setState({
                        list:res.data.safeRegions
                    });

                    this.S_init(this.state.list);

                   // this.inits();





                }
            })
        })
    }

    S_init(list){

        var self=this;


        const getSafeRegions=list;
        getSafeRegions.forEach(function (item,index) {

            new AMap.Map('index'+index, {
                zoom: 15,
                center: [item.centerlng-0.0065, item.centerlat-0.0060],
                dragEnable: false,
                keyboardEnable: false,
                doubleClickZoom: false,
                scrollWheel:false,
                touchZoom:false,
                resizeEnable: true,
            });
        });
    }


    render(){





        return (
            <div className="safetyarea">

            <R_header_fixed left="1" right="1" title="安全区域"/>



            <div className="safetyarea-content">

                {
                    !!this.state.list?
                        this.state.list.map((res,index)=>{

                            return(


                                <div id={'contentWidth'+index}  style={{height:'9rem',overflow:'hidden'}} key={index}>


                                        <Link   to={'/Addarea/'+res.regionid+'/'+res.radius+'/'+res.centerlng+'/'+res.centerlat+'/'+res.name}>
                                            <div style={{height:'9rem',width:'100%',
                                                float:'left',}} onTouchStart={this.TouchStart.bind(this,index)}

                                                 onTouchEnd={this.TouchEnd.bind(this,index)}

                                                 onTouchMove={this.TouchMove.bind(this,index)}  id={'item'+index}>
                                        <div className="content" >
                                            <div style={{position:'relative',zIndex:'100',width:'100%',height:'7rem',top:'0'}} onClick={this.ab}>

                                            </div>

                                            <div  id={'index'+index} style={{
                                                width: '100%',
                                                height: '7rem',
                                                overflow: 'hidden',
                                                margin: '0',
                                                zIndex:'1',
                                                position:'absolute',
                                                top:'0'
                                            }}></div>
                                            <div className="address">
                                                <div className="name">【{res.name}】</div>
                                                <div className="addr">{res.address}</div>
                                            </div>
                                        </div>


                                    </div>

                                        </Link>

                                    {/*`picker-modal${isPickerShow ? ' picker-modal-toggle' : ''}`*/}

                                    <div className="delete"  style={{height:'9rem',width:'0',
                                        float:'left',}}   id={'delete'+index} onClick={this.deleteSafeRegions.bind(this,res.regionid,index)}>
                                        删除
                                    </div>

                                    </div>

                            )
                        }):
                        ''
                }


</div>
                </div>

        )

    }

}



