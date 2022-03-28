import React from "react";
import './css/HomePage.css'
import '../node_modules/picnic/picnic.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import BookSearch from "./BookSearch";
import HomePage from "./HomePage";
class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            InputValue: "",
            SearchClick:false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);

        // this.ChangeinputValue=this.ChangeinputValue.bind(this);
        // this.ClickSearchButton=this.ClickSearchButton.bind(this);
    }
    handleFilterTextChange(e) {
        this.setState({InputValue:e.target.value});
    }

    handleInStockChange(e) {
        this.setState({SearchClick : true});
    }

render() {
    const ROWS = [
        {
            category: "novel",
            name:"《飘》"  ,
            date: "2022.3.23",
            author:"米切尔",
            price:"23",
            Company:"译林出版社",
            introduce:"小说以亚特兰大以及附近的一个种植园为故事场景，描绘了内战前后美国南方人的生活。作品刻画了那个时代的许多南方人的形象，占中心位置的斯嘉丽、瑞德、艾希礼、梅兰妮等人是其中的典型代表。他们的习俗礼仪、言行举止、精神观念、政治态度，通过对斯嘉丽·奥哈拉与白瑞德的爱情纠缠为主线，成功地再现了林肯时期的南北战争以及美国南方地区的社会生活。"
        },
        {category: "novel",price:"19",name:"Gone with the Wind",author:"Michel",introduce: "Love Story",Company:"译林出版社"},
        {category : "textbook",price : "25",name : "Introduce for Computer Science",author : "MIT",introduce : "For CS-APP",Company : "译林出版社"},
        {category : "textbook",price : "30",name : "Introduce for Algorithms",author : "MIT",introduce : "For Algorithms",Company : "译林出版社"},
        {category : "novel",price : "15",name : "Norway's Forest",author : "Santa",introduce : "Love Story",Company : "译林出版社"},
        {category : "novel",price : "99",name : "Love",author: "GainLos",introduce : "The best one for my girl",Company:"上海交通大学出版社"},
        {category : "novel",price : "111",name : "1984",author: "Mike",introduce : "Strict Country",Company:"译林出版社"}
    ];
    let ShowBox=[];
    ShowBox.push(
    <div className="topmenu">
        <div className="homepagebutton">
            <a href="homepage.html"><h2>思源书屋</h2></a>
        </div>
        <div className="searchdiv">
            <input className="searchline" placeholder="Search Books Here" value={this.state.InputValue} type="text" onChange = {this.handleFilterTextChange}/>
            <a href="booksearch.html">
                <button className="searchbutton" onClick={this.handleInStockChange}> Search</button>
            </a>
        </div>
        <div className="loginbutton">
            <a href="loginpagepink.html"><h3>登录/注册</h3></a>
        </div>
        <div className="personalbutton">
            <a className="PersonalCenter" href="personalcenter.html">
                <i className="fa fa-user-circle-o"></i>
            </a>
        </div>
        <div className="personalbutton">
            <a className="shoppingcenter" href="shoppingcenter.html">
                <i className="fa fa-shopping-cart"></i>
            </a>
        </div>
        <div className="clear"></div>
    </div>
    );
    if(this.state.InputValue.length > 0)
    {
        ShowBox.push(
            <BookSearch category={this.state.InputValue} rows={ROWS}/>
        );
    }
    else {
        ShowBox.push(
          <HomePage/>
        );
    }
    return (
        <div>{ShowBox}</div>
    );
}
}
export default TopMenu;