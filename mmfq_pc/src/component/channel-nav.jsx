/**
 * Created by sheldon on 2016/7/11.
 */
'use strict';

class R_ChannelNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: [],
        }
    }

    getCategory() {
        $.ajax({
            type: 'post',
            url: '/pc/computer/query_category_pc',
            dataType: 'json',
            success: (res)=> {
                if (res.result == 0) {
                    this.setState({category: res.data.categoryList})
                }
            }
        })
    }

    componentWillMount() {
        this.getCategory()
    }

    componentDidUpdate() {
        $(function () {//频道页公用导航列表展现
            if ($(".all_left_list").length > 0) {

                $(".all_left_list a").mouseover(function () {
                    if (!$(this).is(".now")) {
                        var nIn = $(this).index();
                        $(".infoShowCont").hide().css({left: 194});
                        $(this).addClass("now").siblings().removeClass("now");
                        $(".infoShowCont").show().animate({left: 204}, {duaration: 150, queue: !1});
                        $(".btnItem2 li").eq(nIn).show().siblings().hide();
                    }
                });
                $(".all_list").mouseleave(function () {
                    $(".infoShowCont").hide().css({"left": 194});
                });
                $('.infoShowCont').hover(function () {
                    $('.all_left_list').addClass('all_left_on');
                }, function () {
                    $('.all_left_list').removeClass('all_left_on');
                });
                $(".pull_down").mouseover(function () {
                    $(".all_list").show();
                }).mouseleave(function () {
                    $(".all_list").hide();
                    $(".infoShowCont").hide().css({"left": 194});
                    $(".all_left_list a").removeClass("now");
                });
            }
        });
    }

    render() {

        var categories = this.state.category.map(function (item, index) {
            return (
                <a className="jingxuan" key={index}>
                    <div  style={{float:'left',width:35,height:35,marginLeft: 25,marginRight: 15,display:'flex'}}>
                        <img src={item.categoryPicPC} style={{margin: 'auto'}}/>
                    </div>
                    <span>{item.categoryName}</span>
                </a>)
        });

        var detail = this.state.category.map(function (item, index) {
            var innerDetail = item.categoryList.map(function (subItem, subIndex) {
                return (
                    <a key={subIndex}
                       href={"goods-list.html?categoryId=" + subItem.categoryId+"&categoryName=" + subItem.categoryName}
                       target="_blank">{subItem.categoryName}</a>
                )
            });
            return (<li key={index} className="jingxuan clearfix" style={{display: 'none'}}>
                {innerDetail}
            </li>)
        });

        return (
            <div>
                <div className="channel_nav channel_nav_js">
                    <div className="channel_nav_cont">
                        <div className="pull_down left">
                            <span className="all_kinds" style={{width: 192}}>全部分类</span>
                            <div className="all_list pos_abs" style={{display:'none'}}>
                                <div className="all_left_list">
                                    {categories}
                                </div>
                                <div className="all_right_list infoShowCont" style={{left: 194, display: 'none',top:0}}>
                                    <ul className="btnItem2" style={{marginTop:2}}>
                                        {detail}
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="big_nav left">
                            {this.props.now == 1 ? <a href="index.html" className='now'> 首页</a> :
                                <a href="index.html"> 首页</a>}
                            {this.props.now == 2 ? <a href="combo.html" className='now'> 网红套餐</a> :
                                <a href="combo.html"> 网红套餐</a>}
                            {this.props.now == 3 ? <a href="goods.html" className='now'> 限时秒杀</a> :
                                <a href="goods.html"> 限时秒杀</a>}
                            {this.props.now == 4 ? <a href="hospital-active.html" className='now'> 院长主刀</a>:<a href="hospital-active.html" > 院长主刀</a>}
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}
