import React from "react";

import '../node_modules/picnic/picnic.css'
import './css/bookindex.css'
import Fly from './img/Fly.jpg'
import TopMenu from "./TopMenu";
class ContainIndex extends React.Component {
constructor(props) {
    super(props);
    this.state={
        name:props.Index.name,
        category:props.Index.category,
        author:props.Index.author,
        price:props.Index.price,
        introduce:props.Index.introduce,
        Company:props.Index.Company,
        NameBox:false
    }
    this.ChangeNameBox=this.ChangeNameBox.bind(this);
    this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
}
    handleFilterTextChange(e){
    this.setState({name:e.target.value});
    }
ChangeNameBox(){
    this.setState({NameBox:!this.state.NameBox});
}
render() {


    return(
        <div className="containBookIndex">
            <h1 >图书详情</h1>
            <div className="clear"></div>
            <div className="imgcontainerBookIndex">
                <img src={Fly} className="imgstanderdBookIndex"/>
            </div>
            <div className="sourceindexBookIndex">
                <ul className = "indexulBookIndex">
                    <li>书籍名称:</li>
                    <li>种类:</li>
                    <li>作者</li>
                    <li>单价：</li>
                    <li>出版商：</li>
                    <li>简介如下：</li>
                </ul>
                <ul className = "indexulBookIndex">
                    <li onDoubleClick={this.ChangeNameBox}>
                        {this.state.NameBox?<input className="searchline" placeholder="" type="text" onChange = {this.handleFilterTextChange}/>:<t>{this.state.name}</t>}</li>
                    <li>{this.state.category}</li>
                    <li>{this.state.author}</li>
                    <li>￥{this.state.price}</li>
                    <li>{this.state.Company}</li>
                </ul>
                <div className="clean"></div>
                <div className="briefintroductionBookIndex">
                    {this.state.introduce}
                    {/*小说以亚特兰大以及附近的一个种植园为故事场景，描绘了内战前后美国南方人的生活。作品刻画了那个时代的许多南方人的形象，占中心位置的斯嘉丽、瑞德、艾希礼、梅兰妮等人是其中的典型代表。他们的习俗礼仪、言行举止、精神观念、政治态度，通过对斯嘉丽·奥哈拉与白瑞德的爱情纠缠为主线，成功地再现了林肯时期的南北战争以及美国南方地区的社会生活。*/}
                </div>
            </div>
            <div className = "buttonBookIndex">
                <button className="success" >加入购物车</button>
            </div>

        </div>


    );}
}
function BookIndex(props){
    // const Index={
    //     Name:"《飘》"  ,
    //     Date: "2022.3.23",
    //     Author:"米切尔",
    //     Price:"23",
    //     Company:"译林出版社",
    //     Introduce:"小说以亚特兰大以及附近的一个种植园为故事场景，描绘了内战前后美国南方人的生活。作品刻画了那个时代的许多南方人的形象，占中心位置的斯嘉丽、瑞德、艾希礼、梅兰妮等人是其中的典型代表。他们的习俗礼仪、言行举止、精神观念、政治态度，通过对斯嘉丽·奥哈拉与白瑞德的爱情纠缠为主线，成功地再现了林肯时期的南北战争以及美国南方地区的社会生活。"
    // };
    return(
        <ContainIndex Index={props.Index}/>
    );
}
export default BookIndex;